
import { useState } from "react";
import { Building2, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { FinancialCard } from "@/components/FinancialCard";
import { InstitutionGrid } from "@/components/InstitutionGrid";
import { TransactionTable } from "@/components/TransactionTable";
import { FinancialChart } from "@/components/FinancialChart";
import { getConsolidationData } from "@/data/mockData";
import { Institution } from "@/types/financial";

const Index = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'institutions' | 'transactions'>('overview');
  const consolidationData = getConsolidationData();

  const handleSelectInstitution = (institution: Institution) => {
    console.log(`Selected institution: ${institution.name}`);
    // Future: Navigate to detailed institution view
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <header className="gradient-primary text-white shadow-financial-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Sistem Keuangan Yayasan Al-Hidayah</h1>
              <p className="text-primary-foreground/80 mt-2">
                Dashboard konsolidasi multi-lembaga pendidikan
              </p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedView('overview')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedView === 'overview' 
                    ? 'bg-white text-primary' 
                    : 'bg-primary-foreground/10 text-white hover:bg-primary-foreground/20'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setSelectedView('institutions')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedView === 'institutions' 
                    ? 'bg-white text-primary' 
                    : 'bg-primary-foreground/10 text-white hover:bg-primary-foreground/20'
                }`}
              >
                Lembaga
              </button>
              <button 
                onClick={() => setSelectedView('transactions')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedView === 'transactions' 
                    ? 'bg-white text-primary' 
                    : 'bg-primary-foreground/10 text-white hover:bg-primary-foreground/20'
                }`}
              >
                Transaksi
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Financial Summary Cards */}
        {selectedView === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FinancialCard
                title="Total Saldo Konsolidasi"
                value={consolidationData.totalBalance}
                subtitle="Seluruh lembaga"
                trend="up"
              />
              <FinancialCard
                title="Total Pemasukan"
                value={consolidationData.totalIncome}
                subtitle="Bulan ini"
                trend="up"
              />
              <FinancialCard
                title="Total Pengeluaran"
                value={consolidationData.totalExpense}
                subtitle="Bulan ini"
                trend="down"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FinancialChart institutions={consolidationData.institutions} type="bar" />
              <FinancialChart institutions={consolidationData.institutions} type="pie" />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="financial-card text-center">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="financial-stat text-2xl">{consolidationData.institutions.length}</p>
                <p className="financial-label">Total Lembaga</p>
              </div>
              <div className="financial-card text-center">
                <TrendingUp className="w-8 h-8 text-financial-success mx-auto mb-2" />
                <p className="financial-stat text-2xl">
                  {Math.round((consolidationData.totalIncome / consolidationData.totalExpense) * 100)}%
                </p>
                <p className="financial-label">Rasio Keuangan</p>
              </div>
              <div className="financial-card text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="financial-stat text-2xl">
                  {(consolidationData.totalIncome / 1000000).toFixed(0)}M
                </p>
                <p className="financial-label">Pemasukan (Juta)</p>
              </div>
              <div className="financial-card text-center">
                <TrendingDown className="w-8 h-8 text-financial-danger mx-auto mb-2" />
                <p className="financial-stat text-2xl">
                  {(consolidationData.totalExpense / 1000000).toFixed(0)}M
                </p>
                <p className="financial-label">Pengeluaran (Juta)</p>
              </div>
            </div>
          </div>
        )}

        {/* Institutions View */}
        {selectedView === 'institutions' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Lembaga Pendidikan</h2>
              <p className="text-muted-foreground">Klik lembaga untuk melihat detail</p>
            </div>
            <InstitutionGrid 
              institutions={consolidationData.institutions} 
              onSelectInstitution={handleSelectInstitution}
            />
          </div>
        )}

        {/* Transactions View */}
        {selectedView === 'transactions' && (
          <div className="space-y-6 animate-fade-in">
            <TransactionTable transactions={consolidationData.recentTransactions} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
