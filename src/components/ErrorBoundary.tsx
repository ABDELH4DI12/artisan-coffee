import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // In production, you might want to log this to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-cream px-4">
          <div className="text-center max-w-md">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-dark-brown mb-2">
              Something went wrong
            </h1>
            <p className="text-light-brown mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleRetry}
              className="btn-primary inline-flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <summary className="cursor-pointer text-red-700 font-medium">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 text-sm text-red-600 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
