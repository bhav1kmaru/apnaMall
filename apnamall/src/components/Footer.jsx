import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Select,
} from '@chakra-ui/react'
const Footer = () => {
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>

          <Tr>
            <Td>
              <Select variant="flushed" placeholder="Electronics">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Mobile">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Cars & Bike">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Super Market">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Women's Fashion">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Select variant="flushed" placeholder="Men's Fashion">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Select option">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Home & Kitchen">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Baby, Kids & Toys">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Cars, Bike & Accesories">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Select variant="flushed" placeholder="Sports & Fitness">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Stationery">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
            <Td>
              <Select variant="flushed" placeholder="Travel Cards">
                <option variant="flushed" value="option1">
                  Option 1
                </option>
                <option variant="flushed" value="option2">
                  Option 2
                </option>
                <option variant="flushed" value="option3">
                  Option 3
                </option>
              </Select>
            </Td>
          </Tr>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Footer
