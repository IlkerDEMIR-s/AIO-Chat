import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import ConversationPage from '@/app/(dashboard)/(routes)/conversation/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    route: '/',
    basePath: '',
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}));

jest.mock('axios');

describe('ConversationPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock implementation before each test
  });

  it('renders form elements', () => {
    render(<ConversationPage />);
    expect(screen.getByPlaceholderText('How do I calculate the area of a trapezoid?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Generate' })).toBeInTheDocument();
  });

  it('submits form successfully', async () => {
    // Render the component
    render(<ConversationPage />);
    
    // Set input value
    fireEvent.change(screen.getByPlaceholderText('How do I calculate the area of a trapezoid?'), {
      target: { value: 'Test message' },
    });
    
    // Mock axios post response
    const dummyResponse = { data: { role: 'bot', content: 'Test response' } };
    (axios.post as jest.Mock).mockResolvedValueOnce(dummyResponse);

    // Trigger form submission
    fireEvent.click(screen.getByRole('button', { name: 'Generate' }));

    // Expect axios post with correct data
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/conversation', { messages: [{ role: 'user', content: 'Test message' }] });
    });

    // Wait for form reset
    await waitFor(() => {
      expect(screen.getByPlaceholderText('How do I calculate the area of a trapezoid?')).toHaveValue('');
    });
  });
});
