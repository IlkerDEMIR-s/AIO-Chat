import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from '@/components/loader';



describe('Loader', () => {
        test('renders correctly', () => {
            const { getByAltText, getByText } = render(<Loader />);
            
            const image = getByAltText('Logo');
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('src', '/_next/image?url=%2Ficon.png&w=3840&q=75');
            
            const loadingText = getByText('AIO Chat is thinking...');
            expect(loadingText).toBeInTheDocument();
        });
    });
