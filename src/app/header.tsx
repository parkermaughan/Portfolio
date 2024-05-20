"use client";

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Header() {
    const { data: session } = useSession();
    return (
        <header>
            <div>
                {session ? (
                    <Button onClick={() => signOut()}>Sign Out</Button>
                ) : (
                    <Button onClick={() => signIn('google')}>Sign In</Button>
                )}
                {session?.user?.name}
                <ModeToggle />
            </div>
        </header>
    );
}
