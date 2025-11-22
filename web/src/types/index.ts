export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export interface Notification {
  id: number
  title: string
  description: string
  type?: NotificationType
  duration?: number
}