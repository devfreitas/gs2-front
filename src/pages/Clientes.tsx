import { useEffect, useState } from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { listarClientes, atualizarCliente, deletarCliente } from '../services/clienteService';
import { validateClienteForm, type ClienteFormErrors } from '../utils/validators';
import type { Cliente, ClienteUpdate } from '../types/cliente.types';

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export function Clientes() {
  const { success, error: showError } = useNotification();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);
  
  // Edit modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<ClienteUpdate>>({});
  const [editErrors, setEditErrors] = useState<ClienteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Delete modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clienteToDelete, setClienteToDelete] = useState<Cliente | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchClientes() {
      setLoadingState('loading');
      setError(null);

      try {
        const data = await listarClientes();
        setClientes(data);
        setLoadingState('success');
      } catch (err) {
        setLoadingState('error');
        const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar clientes';
        setError(errorMessage);
        showError(errorMessage);
      }
    }

    fetchClientes();
  }, []);

  // Open edit modal with cliente data
  const handleEditClick = (cliente: Cliente) => {
    setEditFormData({
      id: cliente.id,
      nomeCompleto: cliente.nomeCompleto,
      cpfNumero: cliente.cpfNumero,
      emailCliente: cliente.emailCliente,
      password: '', // Don't pre-fill password for security
    });
    setEditErrors({});
    setSubmitError(null);
    setIsEditModalOpen(true);
  };

  // Close edit modal and reset state
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditFormData({});
    setEditErrors({});
    setSubmitError(null);
  };

  // Handle form field changes
  const handleEditFormChange = (field: keyof ClienteUpdate, value: string) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for this field when user starts typing
    if (editErrors[field as keyof ClienteFormErrors]) {
      setEditErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  // Submit edit form
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate form data
    const validationErrors = validateClienteForm(editFormData);
    
    if (Object.keys(validationErrors).length > 0) {
      setEditErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const updatedCliente = await atualizarCliente(editFormData as ClienteUpdate);
      
      // Update cliente in the list
      setClientes((prev) =>
        prev.map((c) => (c.id === updatedCliente.id ? updatedCliente : c))
      );

      // Show success notification
      success('Cliente atualizado com sucesso!');

      // Close modal
      handleCloseEditModal();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao atualizar cliente';
      setSubmitError(errorMessage);
      showError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open delete confirmation modal
  const handleDeleteClick = (cliente: Cliente) => {
    setClienteToDelete(cliente);
    setDeleteError(null);
    setIsDeleteModalOpen(true);
  };

  // Close delete modal and reset state
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setClienteToDelete(null);
    setDeleteError(null);
  };

  // Confirm and execute delete
  const handleConfirmDelete = async () => {
    if (!clienteToDelete?.id) return;

    setIsDeleting(true);
    setDeleteError(null);

    try {
      await deletarCliente(clienteToDelete.id);
      
      // Remove cliente from the list
      setClientes((prev) => prev.filter((c) => c.id !== clienteToDelete.id));

      // Show success notification
      success('Cliente excluído com sucesso!');

      // Close modal
      handleCloseDeleteModal();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao excluir cliente';
      setDeleteError(errorMessage);
      showError(errorMessage);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Gerenciamento de Clientes
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Visualize e gerencie todos os clientes cadastrados
          </p>
        </div>

        {/* Loading State */}
        {loadingState === 'loading' && (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center gap-4">
              <svg
                className="animate-spin h-12 w-12 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className="text-gray-600 dark:text-gray-400">
                Carregando clientes...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {loadingState === 'error' && error && (
          <Card variant="bordered" className="border-red-300 dark:border-red-700">
            <div className="flex items-start gap-3">
              <svg
                className="h-6 w-6 text-red-500 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                  Erro ao carregar clientes
                </h3>
                <p className="mt-1 text-red-700 dark:text-red-300">{error}</p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                  onClick={() => window.location.reload()}
                >
                  Tentar novamente
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Empty State */}
        {loadingState === 'success' && clientes.length === 0 && (
          <Card variant="elevated">
            <div className="text-center py-12">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Nenhum cliente cadastrado
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Não há clientes cadastrados no sistema no momento.
              </p>
            </div>
          </Card>
        )}

        {/* Success State - Grid of Cards */}
        {loadingState === 'success' && clientes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientes.map((cliente) => (
              <Card key={cliente.id} variant="elevated">
                <div className="space-y-4">
                  {/* Cliente Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <span className="text-xl font-semibold text-blue-600 dark:text-blue-300">
                          {cliente.nomeCompleto.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {cliente.nomeCompleto}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <svg
                          className="h-4 w-4 text-gray-400 dark:text-gray-500 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400 truncate">
                          {cliente.emailCliente}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <svg
                          className="h-4 w-4 text-gray-400 dark:text-gray-500 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          {cliente.cpfNumero}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleEditClick(cliente)}
                    >
                      <svg
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleDeleteClick(cliente)}
                    >
                      <svg
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Excluir
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Edit Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          title="Editar Cliente"
        >
          <form onSubmit={handleEditSubmit} className="space-y-4">
            {/* Submit Error */}
            {submitError && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {submitError}
                </p>
              </div>
            )}

            {/* Nome Completo */}
            <Input
              label="Nome Completo"
              type="text"
              value={editFormData.nomeCompleto || ''}
              onChange={(e) => handleEditFormChange('nomeCompleto', e.target.value)}
              error={editErrors.nomeCompleto}
              disabled={isSubmitting}
              required
            />

            {/* CPF */}
            <Input
              label="CPF"
              type="text"
              placeholder="XXX.XXX.XXX-XX"
              value={editFormData.cpfNumero || ''}
              onChange={(e) => handleEditFormChange('cpfNumero', e.target.value)}
              error={editErrors.cpfNumero}
              disabled={isSubmitting}
              required
            />

            {/* Email */}
            <Input
              label="Email"
              type="email"
              value={editFormData.emailCliente || ''}
              onChange={(e) => handleEditFormChange('emailCliente', e.target.value)}
              error={editErrors.emailCliente}
              disabled={isSubmitting}
              required
            />

            {/* Password */}
            <Input
              label="Senha"
              type="password"
              value={editFormData.password || ''}
              onChange={(e) => handleEditFormChange('password', e.target.value)}
              error={editErrors.password}
              helperText="Mínimo 6 caracteres"
              disabled={isSubmitting}
              required
            />

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={handleCloseEditModal}
                disabled={isSubmitting}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
              </Button>
            </div>
          </form>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          title="Confirmar Exclusão"
        >
          <div className="space-y-4">
            {/* Delete Error */}
            {deleteError && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {deleteError}
                </p>
              </div>
            )}

            {/* Warning Icon and Message */}
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <svg
                  className="h-12 w-12 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Tem certeza que deseja excluir este cliente?
                </h3>
                {clienteToDelete && (
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>
                      <span className="font-medium">Nome:</span>{' '}
                      {clienteToDelete.nomeCompleto}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{' '}
                      {clienteToDelete.emailCliente}
                    </p>
                    <p>
                      <span className="font-medium">CPF:</span>{' '}
                      {clienteToDelete.cpfNumero}
                    </p>
                  </div>
                )}
                <p className="mt-3 text-sm text-red-600 dark:text-red-400 font-medium">
                  Esta ação não pode ser desfeita.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={handleCloseDeleteModal}
                disabled={isDeleting}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="button"
                variant="danger"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="flex-1"
              >
                {isDeleting ? 'Excluindo...' : 'Sim, Excluir'}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}
