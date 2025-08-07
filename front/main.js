import React, { useState, useEffect } from 'react';
import {
  DollarSign,
  Calendar,
  BarChart3,
  BookOpen,
  Home,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Plus,
  Minus,
  Bell,
  CreditCard,
  PieChart,
  FileText
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart as RechartsPieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const FinancialApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'receita', value: 2500, description: 'Vendas Online', date: '2024-08-01', category: 'vendas' },
    { id: 2, type: 'despesa', value: 800, description: 'Aluguel', date: '2024-08-01', category: 'fixas' },
    { id: 3, type: 'receita', value: 1200, description: 'Consultoria', date: '2024-08-02', category: 'servicos' },
    { id: 4, type: 'despesa', value: 350, description: 'Marketing', date: '2024-08-03', category: 'marketing' }
  ]);

  const [newTransaction, setNewTransaction] = useState({
    type: 'receita',
    value: '',
    description: '',
    category: ''
  });

  // Dados para gráficos
  const monthlyData = [
    { month: 'Jan', receitas: 4000, despesas: 2400 },
    { month: 'Fev', receitas: 3000, despesas: 1398 },
    { month: 'Mar', receitas: 2000, despesas: 9800 },
    { month: 'Abr', receitas: 2780, despesas: 3908 },
    { month: 'Mai', receitas: 1890, despesas: 4800 },
    { month: 'Jun', receitas: 2390, despesas: 3800 },
    { month: 'Jul', receitas: 3490, despesas: 4300 },
    { month: 'Ago', receitas: 3700, despesas: 1150 }
  ];

  const pieData = [
    { name: 'Vendas', value: 45, color: '#10B981' },
    { name: 'Serviços', value: 30, color: '#3B82F6' },
    { name: 'Outros', value: 25, color: '#F59E0B' }
  ];

  const obligations = [
    { id: 1, title: 'DAS - Agosto 2024', date: '2024-08-20', status: 'pendente', value: 180 },
    { id: 2, title: 'Declaração Anual', date: '2024-12-31', status: 'agendado', value: 0 },
    { id: 3, title: 'DAS - Setembro 2024', date: '2024-09-20', status: 'agendado', value: 200 }
  ];

  const educationalContent = [
    {
      id: 1,
      title: 'Como calcular o DAS corretamente',
      category: 'Impostos',
      content: 'O DAS (Documento de Arrecadação do Simples Nacional) é calculado com base no faturamento...',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Planejamento financeiro para MEI',
      category: 'Gestão',
      content: 'Organize suas finanças separando conta pessoal da empresarial...',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Reserva de emergência para pequenos negócios',
      category: 'Investimentos',
      content: 'Mantenha sempre uma reserva equivalente a 3-6 meses de despesas...',
      readTime: '6 min'
    }
  ];

  // Cálculos
  const totalReceitas = transactions.filter(t => t.type === 'receita').reduce((sum, t) => sum + t.value, 0);
  const totalDespesas = transactions.filter(t => t.type === 'despesa').reduce((sum, t) => sum + t.value, 0);
  const saldoMensal = totalReceitas - totalDespesas;

  const addTransaction = () => {
    if (newTransaction.value && newTransaction.description) {
      const transaction = {
        id: Date.now(),
        type: newTransaction.type,
        value: parseFloat(newTransaction.value),
        description: newTransaction.description,
        date: new Date().toISOString().split('T')[0],
        category: newTransaction.category || 'outros'
      };
      setTransactions([...transactions, transaction]);
      setNewTransaction({ type: 'receita', value: '', description: '', category: '' });
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Receitas do Mês</p>
              <p className="text-2xl font-bold text-green-400">R$ {totalReceitas.toLocaleString('pt-BR')}</p>
            </div>
            <div className="h-12 w-12 bg-green-900/30 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Despesas do Mês</p>
              <p className="text-2xl font-bold text-red-400">R$ {totalDespesas.toLocaleString('pt-BR')}</p>
            </div>
            <div className="h-12 w-12 bg-red-900/30 rounded-full flex items-center justify-center">
              <TrendingDown className="h-6 w-6 text-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Saldo Mensal</p>
              <p className={`text-2xl font-bold ${saldoMensal >= 0 ? 'text-blue-400' : 'text-red-400'}`}>
                R$ {saldoMensal.toLocaleString('pt-BR')}
              </p>
            </div>
            <div className={`h-12 w-12 rounded-full flex items-center justify-center ${saldoMensal >= 0 ? 'bg-blue-900/30' : 'bg-red-900/30'}`}>
              <DollarSign className={`h-6 w-6 ${saldoMensal >= 0 ? 'text-blue-400' : 'text-red-400'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de Fluxo de Caixa */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">Fluxo de Caixa Mensal</h3>
        <div className="h-80">
          <LineChart width={800} height={300} data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" tick={{ fill: '#9CA3AF' }} />
            <YAxis tick={{ fill: '#9CA3AF' }} />
            <Tooltip
              formatter={(value) => [`R$ ${value}`, '']}
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Line type="monotone" dataKey="receitas" stroke="#10B981" strokeWidth={3} name="Receitas" />
            <Line type="monotone" dataKey="despesas" stroke="#EF4444" strokeWidth={3} name="Despesas" />
          </LineChart>
        </div>
      </div>

      {/* Alertas e Notificações */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
          <Bell className="h-5 w-5 mr-2" />
          Alertas Importantes
        </h3>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-yellow-900/30 rounded-lg border border-yellow-700">
            <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
            <div>
              <p className="font-medium text-yellow-300">DAS vence em 13 dias</p>
              <p className="text-sm text-yellow-400/70">Valor estimado: R$ 180,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinances = () => (
    <div className="space-y-6">
      {/* Formulário de Nova Transação */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">Nova Transação</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <select
            value={newTransaction.type}
            onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
            className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
         
          <input
            type="number"
            placeholder="Valor"
            value={newTransaction.value}
            onChange={(e) => setNewTransaction({...newTransaction, value: e.target.value})}
            className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
         
          <input
            type="text"
            placeholder="Descrição"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
            className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
         
          <select
            value={newTransaction.category}
            onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
            className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Categoria</option>
            <option value="vendas">Vendas</option>
            <option value="servicos">Serviços</option>
            <option value="fixas">Despesas Fixas</option>
            <option value="marketing">Marketing</option>
          </select>
         
          <button
            onClick={addTransaction}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 flex items-center justify-center transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar
          </button>
        </div>
      </div>

      {/* Lista de Transações */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Transações Recentes</h3>
        </div>
        <div className="divide-y divide-gray-700">
          {transactions.slice().reverse().map((transaction) => (
            <div key={transaction.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 ${
                  transaction.type === 'receita' ? 'bg-green-900/30' : 'bg-red-900/30'
                }`}>
                  {transaction.type === 'receita' ?
                    <Plus className="h-5 w-5 text-green-400" /> :
                    <Minus className="h-5 w-5 text-red-400" />
                  }
                </div>
                <div>
                  <p className="font-medium text-white">{transaction.description}</p>
                  <p className="text-sm text-gray-400">{new Date(transaction.date).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${transaction.type === 'receita' ? 'text-green-400' : 'text-red-400'}`}>
                  {transaction.type === 'receita' ? '+' : '-'}R$ {transaction.value.toLocaleString('pt-BR')}
                </p>
                <p className="text-sm text-gray-400 capitalize">{transaction.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAgenda = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
          <Calendar className="h-5 w-5 mr-2" />
          Agenda de Obrigações
        </h3>
       
        <div className="space-y-4">
          {obligations.map((obligation) => (
            <div key={obligation.id} className={`p-4 rounded-lg border-l-4 ${
              obligation.status === 'pendente' ? 'border-red-500 bg-red-900/20' :
              obligation.status === 'agendado' ? 'border-blue-500 bg-blue-900/20' :
              'border-green-500 bg-green-900/20'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">{obligation.title}</h4>
                  <p className="text-sm text-gray-400">
                    Vencimento: {new Date(obligation.date).toLocaleDateString('pt-BR')}
                  </p>
                  {obligation.value > 0 && (
                    <p className="text-sm font-medium text-gray-300">Valor: R$ {obligation.value.toLocaleString('pt-BR')}</p>
                  )}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  obligation.status === 'pendente' ? 'bg-red-800 text-red-200' :
                  obligation.status === 'agendado' ? 'bg-blue-800 text-blue-200' :
                  'bg-green-800 text-green-200'
                }`}>
                  {obligation.status === 'pendente' ? 'Pendente' :
                   obligation.status === 'agendado' ? 'Agendado' : 'Concluído'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendário Fiscal */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">Calendário Fiscal 2024</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-gray-300">DAS - Datas de Vencimento</h4>
            <ul className="space-y-1 text-gray-400">
              <li>• Janeiro: 20/02</li>
              <li>• Fevereiro: 20/03</li>
              <li>• Março: 20/04</li>
              <li>• Abril: 20/05</li>
              <li>• Maio: 20/06</li>
              <li>• Junho: 20/07</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-gray-300">Outras Obrigações</h4>
            <ul className="space-y-1 text-gray-400">
              <li>• DASN-SIMEI: Até 31/05</li>
              <li>• Relatório Mensal: Todo mês</li>
              <li>• Renovação CNPJ: Anual</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      {/* Distribuição de Receitas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Distribuição de Receitas</h3>
          <div className="h-64">
            <RechartsPieChart width={300} height={250}>
              <Pie
                data={pieData}
                cx={150}
                cy={125}
                outerRadius={80}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, 'Participação']}
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Legend />
            </RechartsPieChart>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Comparativo Mensal</h3>
          <div className="h-64">
            <BarChart width={300} height={250} data={monthlyData.slice(-6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" tick={{ fill: '#9CA3AF' }} />
              <YAxis tick={{ fill: '#9CA3AF' }} />
              <Tooltip
                formatter={(value) => [`R$ ${value}`, '']}
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Bar dataKey="receitas" fill="#10B981" />
              <Bar dataKey="despesas" fill="#EF4444" />
            </BarChart>
          </div>
        </div>
      </div>

      {/* Métricas Importantes */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">Métricas do Negócio</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-800">
            <p className="text-2xl font-bold text-blue-400">82%</p>
            <p className="text-sm text-gray-400">Margem de Lucro</p>
          </div>
          <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-800">
            <p className="text-2xl font-bold text-green-400">R$ 2.550</p>
            <p className="text-sm text-gray-400">Ticket Médio</p>
          </div>
          <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-800">
            <p className="text-2xl font-bold text-purple-400">15</p>
            <p className="text-sm text-gray-400">Clientes Ativos</p>
          </div>
          <div className="text-center p-4 bg-orange-900/20 rounded-lg border border-orange-800">
            <p className="text-2xl font-bold text-orange-400">7.2%</p>
            <p className="text-sm text-gray-400">Crescimento MoM</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
          <BookOpen className="h-5 w-5 mr-2" />
          Centro de Educação Financeira
        </h3>
       
        <div className="space-y-4">
          {educationalContent.map((content) => (
            <div key={content.id} className="p-4 border border-gray-600 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`px-2 py-1 text-xs rounded-full mr-2 ${
                      content.category === 'Impostos' ? 'bg-red-800 text-red-200' :
                      content.category === 'Gestão' ? 'bg-blue-800 text-blue-200' :
                      'bg-green-800 text-green-200'
                    }`}>
                      {content.category}
                    </span>
                    <span className="text-xs text-gray-500">{content.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">{content.title}</h4>
                  <p className="text-sm text-gray-400">{content.content}</p>
                </div>
                <FileText className="h-5 w-5 text-gray-500 ml-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calculadoras Úteis */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">Calculadoras Financeiras</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-600 rounded-lg text-center hover:bg-gray-700/50 cursor-pointer transition-colors">
            <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-400" />
            <h4 className="font-medium text-white">Calculadora DAS</h4>
            <p className="text-sm text-gray-400">Calcule seu DAS baseado no faturamento</p>
          </div>
          <div className="p-4 border border-gray-600 rounded-lg text-center hover:bg-gray-700/50 cursor-pointer transition-colors">
            <PieChart className="h-8 w-8 mx-auto mb-2 text-green-400" />
            <h4 className="font-medium text-white">Margem de Lucro</h4>
            <p className="text-sm text-gray-400">Calcule a margem de lucro dos seus produtos</p>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'finances', label: 'Financeiro', icon: DollarSign },
    { id: 'agenda', label: 'Obrigações', icon: Calendar },
    { id: 'reports', label: 'Relatórios', icon: BarChart3 },
    { id: 'education', label: 'Educação', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">FinanceiroMEI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'finances' && renderFinances()}
        {activeTab === 'agenda' && renderAgenda()}
        {activeTab === 'reports' && renderReports()}
        {activeTab === 'education' && renderEducation()}
      </div>
    </div>
  );
};

export default FinancialApp;