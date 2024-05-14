import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { ProModal } from '@/components/pro-modal';

// Mocking useProModal 
jest.mock('@/hooks/use-pro-modal', () => ({
    useProModal: () => ({
      isOpen: true,
      onClose: jest.fn(),
    })
  }));
  
  
  // Mocking axios
  jest.mock('axios');
  
  describe('ProModal', () => {
    test('renders correctly', () => {
      render(<ProModal />);
      // Add your assertions for rendering here
    });
  
    test('handles subscribe click', async () => {
      // Mocking axios response
      (axios.get as jest.Mock).mockResolvedValueOnce({ data: { url: 'http://localhost/' } });
  
      render(<ProModal />);
  
      fireEvent.click(screen.getByRole('button', { name: 'Upgrade' }));
  
      await waitFor(() => {
        expect(axios.get).toHaveBeenCalledWith('/api/stripe');
        expect(window.location.href).toBe('http://localhost/');
      });
    });
  });