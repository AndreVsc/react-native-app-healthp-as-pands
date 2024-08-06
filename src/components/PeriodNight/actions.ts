import * as Notifications from 'expo-notifications';

// Configuração do manipulador de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const convertTo24HourFormat = (hour: number, minute: number, period: string) => {
  let adjustedHour = hour % 12;
  if (period === 'PM') adjustedHour += 12;

  return { hour: adjustedHour, minute };
};

// Função para agendar uma notificação diária
export async function scheduleDailyNotification(hour: number, minute: number, period: string, title: string, body: string) {
  try {
    const { hour: adjustedHour, minute: adjustedMinute } = convertTo24HourFormat(hour, minute, period);
    const now = new Date();

    const trigger = new Date();
    trigger.setHours(adjustedHour);
    trigger.setMinutes(adjustedMinute);
    trigger.setSeconds(0);
    trigger.setMilliseconds(0);

    if (trigger <= now) {
      trigger.setDate(trigger.getDate() + 1);
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: true,
        color: "#ffffff",
      },
      trigger: {
        hour: trigger.getHours(),
        minute: trigger.getMinutes(),
        repeats: true,
      },
    });
  } catch (error) {
    console.error("Failed to schedule notification:", error);
  }
}

// Função para cancelar notificações que não correspondem ao horário selecionado
export async function cancelMismatchedNotifications(selectedHour: number, selectedMinute: number, selectedPeriod: string) {
  const { hour: targetHour, minute: targetMinute } = convertTo24HourFormat(selectedHour, selectedMinute, selectedPeriod);
  const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
  
  for (const notification of scheduledNotifications) {
    const trigger = notification.trigger as any;
    if (trigger.hour !== targetHour || trigger.minute !== targetMinute) {
      await Notifications.cancelScheduledNotificationAsync(notification.identifier);
    }
  }
}

// Função para cancelar todas as notificações
export async function cancelAllNotifications() {
  const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
  
  for (const notification of scheduledNotifications) {
    await Notifications.cancelScheduledNotificationAsync(notification.identifier);
  }
}
