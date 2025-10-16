import { Ohce } from './Ohce'

describe('Ohce feature tests', () => {
  it("Buenas dias pedro quand le prénom est Pedro et que c'est le matin", () => {

    type Printer = {
        println: (input: string) => void
    }

    // Arrange
    const ohce = new Ohce()
    const printer: Printer = {
        println: jest.fn()
    }

    // Act
    ohce.start('Pedro')

    // Assert
    expect(printer.println).toHaveBeenCalledWith("¡Buenos días Pedro!")
  })
})
