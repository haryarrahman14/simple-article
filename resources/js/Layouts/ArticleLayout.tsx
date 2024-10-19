import { Menu } from '@/Components/shared/menu';
import { Sidebar } from '@/Components/shared/sidebar';
import { ScrollArea } from '@/Components/ui/scroll-area';
import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function ArticleLayout({ children, title }: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <Head title={title} />
            <Menu />
            <div className="border-t">
                <div className="bg-background">
                    <div className="grid md:grid-cols-5 grid-cols-4">
                        <Sidebar className="hidden md:block" />
                        <div className="col-span-4 border-l">
                            <ScrollArea className="h-[calc(100vh-38px)] rounded-md border lg:block hidden">
                                {children}
                            </ScrollArea>

                            <div className="lg:hidden block">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
