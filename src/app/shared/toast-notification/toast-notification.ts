import {
  Component,
  effect,
  inject,
  signal
} from '@angular/core';

import {
  AccessNotification,
  AccessService
} from '../../core/services/access';

@Component({
  selector: 'app-toast-notification',
  standalone: true,
  imports: [],
  templateUrl: './toast-notification.html',
  styleUrl: './toast-notification.scss'
})
export class ToastNotificationComponent {

  private accessService =
    inject(AccessService);

  currentToast =
    signal<AccessNotification | null>(null);

  private processedNotificationIds =
    new Set<number>();

  private toastTimer:
    ReturnType<typeof setTimeout> | null =
    null;

  constructor() {

    effect(() => {

      const notifications =
        this.accessService
          .notificationsSignal();

      const newNotifications =
        notifications.filter(
          notification =>
            !this.processedNotificationIds.has(
              notification.id
            )
        );

      if (!newNotifications.length) {
        return;
      }

      newNotifications.forEach(
        notification =>
          this.processedNotificationIds.add(
            notification.id
          )
      );

      this.showNotifications(
        newNotifications
      );

    });

  }

  private showNotifications(
    notifications: AccessNotification[]
  ): void {

    const type =
      notifications[0].type;

    const sameType =
      notifications.every(
        notification =>
          notification.type === type
      );

    if (!sameType) {
      this.showToast(
        notifications[0]
      );

      return;
    }

    const combined: AccessNotification = {
      id: notifications[0].id,
      type,
      count: notifications.length
    };

    this.showToast(combined);
  }

  private showToast(
    notification: AccessNotification
  ): void {

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.currentToast.set(
      notification
    );

    this.toastTimer =
      setTimeout(() => {

        this.currentToast.set(null);

        this.toastTimer = null;

      }, 4500);

  }

  getTitle(
    notification: AccessNotification
  ): string {

    if (
      notification.type ===
      'WITNESS'
    ) {

      return notification.count > 1
        ? `${notification.count} NEW WITNESS RECORDS`
        : 'NEW WITNESS INFORMATION';

    }

    return notification.count > 1
      ? `${notification.count} NEW NOTEBOOK ENTRIES`
      : 'NEW NOTEBOOK ENTRY';
  }

  getMessage(
    notification: AccessNotification
  ): string {

    if (
      notification.type ===
      'WITNESS'
    ) {

      return notification.count > 1
        ? 'New witness information has been added to your case files.'
        : 'New witness information has been added to your case files.';

    }

    return notification.count > 1
      ? 'New information has been added to your notebook.'
      : 'New information has been added to your notebook.';
  }

}