import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { Separator } from '@radix-ui/react-dropdown-menu';

const POstdetailskeleton = () => {
    return (
        <div>
            <div className="w-full max-w-3xl container mx-auto">
                <div className="w-full h-full py-2">
                    <Skeleton className="w-full h-80" />
                </div>

                <div className="flex gap-2 items-center py-3">
                    <div className="rounded-full">
                        <Skeleton className="w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <div className="flex gap-3 items-center">
                            <Skeleton className="w-24 h-4" />
                            <Skeleton className="w-12 h-4" />
                        </div>
                        <Skeleton className="w-16 h-3 mt-1" />
                    </div>
                </div>

                <Skeleton className="w-2/3 h-8" />

                <div className="py-1">
                    <Skeleton className="w-1/4 h-4" />
                </div>

                <div className="py-3">
                    <Skeleton className="w-full h-32" />
                </div>

                <Separator className="my-4" />

                <div className="flex gap-3 items-center justify-between py-3 h-24">
                    <div className="flex items-center gap-1">
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="w-8 h-6" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Skeleton className="w-24 h-4" />
                        <Skeleton className="w-8 h-4" />
                    </div>
                </div>

                <Separator className="my-4" />

                <div>
                    <Skeleton className="w-full h-10" />
                </div>

                <div>
                    <Skeleton className="w-full h-8 mb-2" />
                    <div className="grid grid-cols-1 gap-3 py-3">
                        <Skeleton className="w-full h-12" />
                        <Skeleton className="w-full h-12" />
                        <Skeleton className="w-full h-12" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POstdetailskeleton;