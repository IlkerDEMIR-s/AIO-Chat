import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { tools } from '@/constants';
import HomePage from '@/app/(dashboard)/(routes)/dashboard/page';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HomePage', () => {
  beforeEach(() => {
    // Clear all mock calls before each test
    jest.clearAllMocks();

    // Mock the useRouter hook to return an object with push function
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it('renders main heading and TypewriterComponent', () => {
    render(<HomePage />);
    
    expect(screen.getByText('Discover the Might of AI')).toBeInTheDocument();
    
    // Wait for the text to appear
    waitFor(() => {
      expect(screen.getByText('Pick a service to get started')).toBeInTheDocument();
    });
  });


  it('navigates to the correct route when a tool card is clicked', () => {
    const { getByText } = render(<HomePage />);

    // Click on the first tool card
    fireEvent.click(getByText(tools[0].label));

    // Check if useRouter.push is called with the correct href
    expect(useRouter().push).toHaveBeenCalledWith(tools[0].href);
  });
});