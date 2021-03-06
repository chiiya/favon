<?php

namespace Favon\Auth\Mail;

use Favon\Application\Mail\MjmlMailable;

class ResetPassword extends MjmlMailable
{
    /**
     * @var string
     */
    protected $token;

    /**
     * ResetPassword constructor.
     * @param string $token
     */
    public function __construct(string $token)
    {
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): self
    {
        return $this
            ->subject('Favon - Reset password')
            ->view('emails.reset-password')
            ->with([
                'token' => $this->token,
            ]);
    }
}
