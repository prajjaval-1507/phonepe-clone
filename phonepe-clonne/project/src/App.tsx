import React from 'react';
import { CreditCard, Home, Search, Bell, Clock, QrCode, Phone, Building2, Wallet, Zap, Coins, Car, Plane, PiggyBank, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#012E2B] text-white">
      {/* Header Banner */}
      <div className="bg-[#012E2B] p-6 text-center space-y-4">
        <h2 className="text-lg">Fetch & Settle instantly on PhonePe</h2>
        <h1 className="text-3xl font-bold">Pay Credit Card Bills</h1>
        <button className="bg-white text-black px-6 py-2 rounded-full flex items-center mx-auto">
          Check Your Bill <span className="ml-2">→</span>
        </button>
      </div>

      {/* Money Transfers */}
      <div className="bg-white text-black p-6">
        <h2 className="text-xl font-semibold mb-4">Money Transfers</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-2">
              <Phone className="text-white w-8 h-8" />
            </div>
            <p className="text-sm">To Mobile Number</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-2">
              <Building2 className="text-white w-8 h-8" />
            </div>
            <p className="text-sm">To Bank & Self A/c</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-2">
              <Wallet className="text-white w-8 h-8" />
            </div>
            <p className="text-sm">Check Balance</p>
          </div>
        </div>
      </div>

      {/* Service Grid */}
      <div className="bg-gray-100 p-4 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Recharge & Bills</h3>
          <p className="text-gray-600 text-sm">Loan EMI, Electricity, Rent</p>
          <div className="mt-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Data Top-Up</span>
          </div>
          <Zap className="text-purple-600 mt-4" />
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Loans</h3>
          <div className="mt-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Gold Loan</span>
          </div>
          <Coins className="text-purple-600 mt-4" />
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Insurance</h3>
          <p className="text-gray-600 text-sm">Motor, Health & more</p>
          <Car className="text-purple-600 mt-4" />
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Travel & Transit</h3>
          <p className="text-gray-600 text-sm">Flight, Train, Bus, Hotel, Metro</p>
          <div className="mt-4">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Sale</span>
          </div>
          <Plane className="text-purple-600 mt-4" />
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Savings</h3>
          <p className="text-gray-600 text-sm">Gold SIP, NPS</p>
          <PiggyBank className="text-purple-600 mt-4" />
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Mutual Funds</h3>
          <p className="text-gray-600 text-sm">SIPs & Investments</p>
          <TrendingUp className="text-purple-600 mt-4" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white text-gray-600 flex justify-around items-center p-4">
        <div className="text-center">
          <Home className="w-6 h-6 mx-auto" />
          <p className="text-xs mt-1">Home</p>
        </div>
        <div className="text-center">
          <Search className="w-6 h-6 mx-auto" />
          <p className="text-xs mt-1">Search</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-600 p-3 rounded-full -mt-8">
            <QrCode className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="text-center">
          <Bell className="w-6 h-6 mx-auto" />
          <p className="text-xs mt-1">Alerts</p>
        </div>
        <div className="text-center">
          <Clock className="w-6 h-6 mx-auto" />
          <p className="text-xs mt-1">History</p>
        </div>
      </div>
    </div>
  );
}

export default App;