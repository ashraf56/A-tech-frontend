import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const LoadingSkeleton = () => {
    return (
        <>

            <Card className="w-full max-w-3xl rounded-2xl mx-auto">
                <CardHeader>
                    <div className="flex gap-2 items-center">
                        <div>
                            <Skeleton className="w-12 h-12 rounded-full" />
                        </div>
                        <div>
                            <Skeleton className="w-24 h-4 mb-2" />
                            <Skeleton className="w-16 h-3" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-3xl py-2">
                        <Skeleton className="w-full h-8 rounded-md" />
                    </CardTitle>
                    <Skeleton className="w-3/4 h-4 mb-4" />
                    <div className="pt-3 flex gap-2">
                        <Skeleton className="w-20 h-6 rounded-md" />
                        <Skeleton className="w-20 h-6 rounded-md" />
                    </div>
                    <CardDescription className="py-5 h-full">
                        <Skeleton className="w-full h-52 rounded-lg" />
                    </CardDescription>
                    <hr />
                    <div className="flex gap-3 items-center mt-5">
                        <div className="flex gap-1 items-center">
                            <Skeleton className="w-7 h-7 rounded-full" />
                            <Skeleton className="w-6 h-4" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <Skeleton className="w-6 h-6 rounded-full" />
                            <Skeleton className="w-6 h-4" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default LoadingSkeleton;