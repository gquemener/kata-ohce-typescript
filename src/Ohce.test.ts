import { Ohce, Printer, Morning } from './Ohce'

describe('Ohce feature tests', () => {
  it("Buenas dias pedro quand le prénom est Pedro et que c'est le matin", () => {
    // Arrange
    const printer: Printer = jest.fn();
    const moment: jest.Mock<Morning> = jest.fn();
    moment.mockReturnValue("Morning");

    const ohce = new Ohce(printer, moment)

    // Act
    ohce.start('Pedro')

    // Assert
    expect(printer).toHaveBeenCalledWith("¡Buenos días Pedro!")

    // Given it is the Morning
    // And my name is Pedro
    // When I start the application
    // Then I should see "¡Buenos días Pedro!"
  })
})
