
import React from 'react';
import { Card } from '@/components/ui/card';
import { TransactionForm } from '@/components/transactions/TransactionForm';
import { TransactionList } from '@/components/transactions/TransactionList';
import { Button } from '@/components/ui/button';
import { Download, Upload, FileText, BarChart3 } from 'lucide-react';

export const ManagementPanel = () => {
  const handleExportData = () => {
    // TODO: Implement export functionality
    console.log('Export data');
  };

  const handleImportData = () => {
    // TODO: Implement import functionality
    console.log('Import data');
  };

  const handleGenerateReport = () => {
    // TODO: Implement report generation
    console.log('Generate report');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Manajemen Data</h2>
        
        <div className="flex flex-wrap gap-2">
          <TransactionForm />
          <Button variant="outline" onClick={handleExportData}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" onClick={handleImportData}>
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" onClick={handleGenerateReport}>
            <FileText className="w-4 h-4 mr-2" />
            Laporan
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="financial-card text-center">
          <div className="space-y-2">
            <BarChart3 className="w-8 h-8 text-primary mx-auto" />
            <p className="financial-stat text-xl">6</p>
            <p className="financial-label">Total Lembaga</p>
          </div>
        </Card>
        <Card className="financial-card text-center">
          <div className="space-y-2">
            <FileText className="w-8 h-8 text-financial-success mx-auto" />
            <p className="financial-stat text-xl">150</p>
            <p className="financial-label">Transaksi Bulan Ini</p>
          </div>
        </Card>
        <Card className="financial-card text-center">
          <div className="space-y-2">
            <Download className="w-8 h-8 text-primary mx-auto" />
            <p className="financial-stat text-xl">12</p>
            <p className="financial-label">Laporan Dibuat</p>
          </div>
        </Card>
        <Card className="financial-card text-center">
          <div className="space-y-2">
            <Upload className="w-8 h-8 text-financial-success mx-auto" />
            <p className="financial-stat text-xl">95%</p>
            <p className="financial-label">Data Accuracy</p>
          </div>
        </Card>
      </div>

      {/* Transaction Management */}
      <TransactionList />
    </div>
  );
};
