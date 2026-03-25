import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden w-full max-w-[280px] mx-auto h-[350px] flex flex-col animate-pulse">
            {/* Image Skeleton */}
            <div className="h-40 bg-slate-200 dark:bg-slate-800 w-full"></div>

            {/* Content Skeleton */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                    {/* Category Label Skeleton */}
                    <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                    {/* Rating Skeleton */}
                    <div className="h-4 w-10 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                </div>

                {/* Title Skeleton */}
                <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-md w-3/4 mb-2"></div>
                
                {/* Location Skeleton */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                    <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-md w-1/2"></div>
                </div>

                {/* Bottom Section Skeleton */}
                <div className="mt-auto flex items-end justify-between border-t border-slate-50 dark:border-slate-800 pt-3">
                    <div>
                        <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-md mb-1"></div>
                        <div className="h-3 w-12 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
                    </div>
                    {/* Button Skeleton */}
                    <div className="h-9 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
