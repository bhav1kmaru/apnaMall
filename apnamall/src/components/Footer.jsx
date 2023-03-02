import React from "react";
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
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <div style={{marginTop:"200px"}}>
      <h4 style={{ marginLeft: "1%" }}>
        {" "}
        From Electronics, Fashion to Cars: Buy Everything Online from the
        Convenence of Your Home from Paytm Mall
      </h4>
      <TableContainer bg={"teal"}>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>

          <Thead></Thead>
          <Tbody>
            <Tr>
              <Td>
                <Select variant="simple" placeholder="Electronics">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Mobile">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Cars & Bike">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Super Market">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Women's Fashion">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Select variant="simple" placeholder="Men's Fashion">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Select option">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Home & Kitchen">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Baby, Kids & Toys">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Cars, Bike & Accesories">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Select variant="simple" placeholder="Sports & Fitness">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Stationery">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
              <Td>
                <Select variant="simple" placeholder="Travel Cards">
                  <option variant="simple" value="option1">
                    Option 1
                  </option>
                  <option variant="simple" value="option2">
                    Option 2
                  </option>
                  <option variant="simple" value="option3">
                    Option 3
                  </option>
                </Select>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Footer;
