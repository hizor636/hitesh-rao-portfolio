import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080808] text-[#f5f5f5] flex items-center justify-center p-6 selection:bg-[#d4ff4f] selection:text-black">
          <div className="max-w-md w-full p-8 rounded-2xl border border-white/10 bg-[#121216] shadow-2xl text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#d4ff4f]/10 border border-[#d4ff4f]/30 flex items-center justify-center text-[#d4ff4f] font-mono text-xl font-bold">
              !
            </div>
            <h2 className="text-xl font-medium tracking-tight mb-2 text-white">
              Portfolio Display Recovering
            </h2>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              An unexpected render glitch was caught safely. Click below to refresh the interactive view.
            </p>
            {this.state.error?.message && (
              <pre className="text-left font-mono text-xs bg-black/50 text-[#d4ff4f] p-3 rounded-lg border border-white/5 mb-6 overflow-x-auto">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#d4ff4f] text-black font-semibold text-xs tracking-wider uppercase font-mono hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(212,255,79,0.25)]"
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
