import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {render, fireEvent, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom'
import "@testing-library/react/cleanup-after-each"
import Display from './components/Display'
import Dashboard from './components/Dashboard';

describe('<App />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('should render balls and strikes starting with 0', () => {
        const {container} = render(<App />);

        const strikes = getByTestId(container, 'strike')
    
        expect(strikes.textContent).toBe('Strikes: 0')
    })
    it('test 2', () => {
        
        const display = render(<App />);
        display.getByText(/Strikes: 0/i)
       
    })

    it("strike button works", () => {
      const { container } = render(<App />);
      const balls = getByTestId(container, "ball");
      const strikes = getByTestId(container, "strike");
      const stikeButton = getByTestId(container, "strike-button");
      expect(strikes.textContent).toBe("Strikes: 0");
      fireEvent.click(stikeButton);
      expect(strikes.textContent).toBe("Strikes: 1");
      fireEvent.click(stikeButton);
      expect(strikes.textContent).toBe("Strikes: 2");
      fireEvent.click(stikeButton);
      expect(strikes.textContent).toBe("Strikes: 0");
      expect(balls.textContent).toBe("Balls: 0");
    });

    it("ball button works", () => {
      const { container } = render(<App />);
      const strikes = getByTestId(container, "strike");
      const balls = getByTestId(container, "ball");
      const ballButton = getByTestId(container, "ball-button");
      expect(balls.textContent).toBe("Balls: 0");
      fireEvent.click(ballButton);
      expect(balls.textContent).toBe("Balls: 1");
      fireEvent.click(ballButton);
      expect(balls.textContent).toBe("Balls: 2");
      fireEvent.click(ballButton);
      expect(balls.textContent).toBe("Balls: 3");
      fireEvent.click(ballButton);
      expect(balls.textContent).toBe("Balls: 0");
      expect(strikes.textContent).toBe("Strikes: 0");
    });

    it("foul button works", () => {
      const { container } = render(<App />);
      const balls = getByTestId(container, "ball");
      const strikes = getByTestId(container, "strike");
      const foulButton = getByTestId(container, "foul-button");
      expect(strikes.textContent).toBe("Strikes: 0");
      fireEvent.click(foulButton);
      expect(strikes.textContent).toBe("Strikes: 1");
      fireEvent.click(foulButton);
      expect(strikes.textContent).toBe("Strikes: 2");
      fireEvent.click(foulButton);
      expect(strikes.textContent).toBe("Strikes: 2");
    });

    it("hit button works", () => {
      const { container } = render(<App />);
      const strikes = getByTestId(container, "strike");
      const balls = getByTestId(container, "ball");
      const stikeButton = getByTestId(container, "strike-button");
      const ballButton = getByTestId(container, "ball-button");
      const hitButton = getByTestId(container, "hit-button");
      expect(strikes.textContent).toBe("Strikes: 0");
      fireEvent.click(stikeButton);
      expect(strikes.textContent).toBe("Strikes: 1");
      fireEvent.click(ballButton);
      expect(balls.textContent).toBe("Balls: 1");
      fireEvent.click(hitButton);
      expect(strikes.textContent).toBe("Strikes: 0");
      expect(balls.textContent).toBe("Balls: 0");
    });
})
