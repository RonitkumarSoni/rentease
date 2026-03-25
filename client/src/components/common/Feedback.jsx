import React from 'react';
import { Loader2, AlertCircle, Inbox, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Loader = () => (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="animate-spin text-primary mb-2" size={48} />
        <p className="text-slate-500 font-medium animate-pulse">Loading RentEase...</p>
    </div>
);

export const ErrorState = ({ message = 'Something went wrong!', onRetry }) => (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
        <AlertCircle className="text-red-500 mb-4" size={64} />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Oops!</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">{message}</p>
        <div className="flex gap-4">
            {onRetry && (
                <button 
                    onClick={onRetry}
                    className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-dark transition-colors"
                >
                    <RefreshCw size={18} /> Retry
                </button>
            )}
            <Link to="/" className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-6 py-2 rounded-md font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Home size={18} /> Back Home
            </Link>
        </div>
    </div>
);

export const EmptyState = ({ title = 'No items found', message = 'Try adjusting your filters or search keywords.', actionLink = '/browse', actionText = 'Browse All' }) => (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-full mb-6">
            <Inbox className="text-slate-400" size={64} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">{message}</p>
        {actionLink && (
            <Link 
                to={actionLink}
                className="bg-primary text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1"
            >
                {actionText}
            </Link>
        )}
    </div>
);
