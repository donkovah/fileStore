import { saveDataToFile } from './saveDataToFile';
import { writeFileSync } from 'fs';

// Mock the writeFileSync method from 'fs'
jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));

describe('saveDataToFile', () => {
  const mockFilePath = 'testFile.json';
  const testData = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

  beforeEach(() => {
    jest.clearAllMocks();  // Clear mocks before each test to prevent cross-test contamination
  });

  it('should successfully write data to a file', () => {
    saveDataToFile(mockFilePath, testData);

    // Verify writeFileSync was called with the correct arguments
    expect(writeFileSync).toHaveBeenCalledWith(
      mockFilePath,
      JSON.stringify(testData, null, 2),
      { encoding: 'utf-8' }
    );
  });

  it('should handle errors gracefully and log the error', () => {
    const errorMessage = 'Permission denied';
    (writeFileSync as jest.Mock).mockImplementationOnce(() => {
      throw new Error(errorMessage);
    });

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(); // Mock console.error

    saveDataToFile(mockFilePath, testData);

    // Check if error was logged to the console
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `Error writing to file "${mockFilePath}": ${errorMessage}`
    );

    consoleErrorSpy.mockRestore();  // Restore the console.error method after the test
  });

  it('should log a success message when data is saved successfully', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();  // Mock console.log

    saveDataToFile(mockFilePath, testData);

    // Check if success message was logged to the console
    expect(consoleLogSpy).toHaveBeenCalledWith(`Data successfully saved to ${mockFilePath}`);

    consoleLogSpy.mockRestore();  // Restore the console.log method after the test
  });

});
