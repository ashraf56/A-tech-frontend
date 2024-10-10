import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const RecentPostSkeleton = () => {
    return (
        <>
            <Card className="w-full max-w-xl rounded-none mx-auto">
                <CardContent className="flex flex-col py-3">
                    <CardTitle className="text-sm">
                        <Skeleton className="w-full h-4 rounded-md" />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className="w-32 h-3 mt-2 rounded-md" />
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    );
};

export default RecentPostSkeleton;