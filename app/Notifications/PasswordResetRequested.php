<?php
namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PasswordResetRequested extends Notification
{
  use Queueable;

  protected $token;

  protected $email;

  public function __construct(string $token, string $email)
  {
    $this->token = $token;
    $this->email = $email;
  }

  /**
   * Get the notification's delivery channels.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function via($notifiable)
  {
    return ['mail'];
  }

  /**
   * Get the mail representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return \Illuminate\Notifications\Messages\MailMessage
   */
  public function toMail($notifiable)
  {
    return (new MailMessage)
      ->line('You are receiving this email because you requested to change your password.')
      ->line('In case you are not the one who requested this, ignore this message, otherwise:')
      ->action('Reset your password here!', url('/password/reset/' . $this->token . '/?email=' . $this->email))
      ->line('Thank you for using your Pokedex!');
  }

  /**
   * Get the array representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function toArray($notifiable)
  {
    return [
      'token' => $this->token,
      'email' => $this->email
    ];
  }
}
