import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <Guest>
            <Head title="Portal News" />
            <p>YOOO WASSUP THIS IS PORTAL</p>
        </Guest>
    );
}
