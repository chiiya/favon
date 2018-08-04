<?php

namespace Favon\Auth\Jobs;

use Favon\Auth\Models\User;
use Illuminate\Mail\Mailer;
use Illuminate\Bus\Queueable;
use Favon\Auth\Mail\ResetPassword;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendResetPasswordEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var User
     */
    protected $user;

    /**
     * @var string
     */
    protected $token;

    /**
     * SendResetPasswordEmail constructor.
     * @param User $user
     * @param string $token
     */
    public function __construct(User $user, string $token)
    {
        $this->user = $user;
        $this->token = $token;
    }

    /**
     * @param Mailer $mailer
     */
    public function handle(Mailer $mailer): void
    {
        $mailer->to($this->user)->send(new ResetPassword($this->token));
    }
}
