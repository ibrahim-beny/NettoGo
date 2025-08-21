import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const English: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            NettoGo - Dutch Salary Calculator 2025
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The fastest way to calculate your net salary in the Netherlands. Based on official Dutch tax rules for 2025.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              About NettoGo
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              NettoGo is a comprehensive Dutch salary calculator designed to help employees understand their net income 
              after taxes and social contributions. Our tool uses the latest Dutch tax rates for 2025 and takes into 
              account all relevant factors including tax credits, social premiums, holiday allowance, and 13th month payments.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Why Use NettoGo?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Unlike other calculators, NettoGo provides real-time calculations as you type, giving you immediate 
              feedback on how different salary levels affect your net income. Our calculator is built with privacy 
              in mind - all calculations happen locally in your browser without storing any personal data on our servers.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Dutch Tax System 2025
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              The Netherlands uses a progressive tax system with different tax brackets. In 2025, the first bracket 
              (up to €75,518) is taxed at 36.97%, the second bracket (€75,518 to €109,432) at 40.8%, and the third 
              bracket (above €109,432) at 49.5%. Our calculator automatically applies the correct rates and includes 
              general tax credits and employment credits for accurate calculations.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              What's Included in the Calculation?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Our calculator considers all important factors: Dutch tax rates 2025, general tax credits, employment 
              credits, social premiums (AOW, ANW, WIA, ZVW), holiday allowance (8%), and 13th month payments if applicable. 
              This ensures an extremely accurate calculation of your net income, helping you make informed decisions 
              about your career and financial planning.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Who Can Use This Calculator?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              The NettoGo calculator is suitable for all employees in the Netherlands, whether you work full-time or 
              part-time, are young or experienced. Our tool provides accurate calculations for standard employment 
              situations. For self-employed individuals (ZZP) and expats with special arrangements like the 30% ruling, 
              we recommend consulting a tax advisor for personalized advice.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Ready to calculate your net salary?
              </h3>
              <p className="text-slate-700 mb-4">
                Start using our calculator and discover how much you'll actually take home.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Real-time Calculations</h3>
            <p className="text-slate-700 leading-relaxed">
              See how your net income changes as you type. No waiting times, immediate results with every keystroke.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">100% Privacy</h3>
            <p className="text-slate-700 leading-relaxed">
              All calculations happen locally in your browser. Your salary information is never stored or transmitted.
            </p>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-slate-50/80 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            More Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Calculator</h3>
              <p className="text-slate-600">Start calculating</p>
            </Link>
            <Link 
              to="/about" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">About NettoGo</h3>
              <p className="text-slate-600">Learn more about our tool</p>
            </Link>
            <Link 
              to="/blog/hoe-bereken-je-netto-salaris-2025" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">How It Works</h3>
              <p className="text-slate-600">Read our detailed guide</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
