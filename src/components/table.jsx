import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TableComponent = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>EVENT</TableCell>
            <TableCell>Predictability</TableCell>
            <TableCell>Back</TableCell>
            <TableCell>Adjust Back</TableCell>
            <TableCell>Lay</TableCell>
            <TableCell>Adjust Lay</TableCell>
            <TableCell>Probability</TableCell>
            <TableCell>Back Value</TableCell>
            <TableCell>Lay Value</TableCell>
            <TableCell>K-factor Back</TableCell>
            <TableCell>K-factor Lay</TableCell>
            <TableCell>Back Amount</TableCell>
            <TableCell>Lay Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((event, index) => (
            <React.Fragment key={index}>
              <TableRow style={{ backgroundColor: "#D32F2F", color: "white" }}>
                <TableCell
                  colSpan={13}
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  {event.event} - {event.date}
                </TableCell>
              </TableRow>

              {event.sections.map((section, sectionIndex) => (
                <TableRow key={sectionIndex}>
                  <TableCell colSpan={13}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{section.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Table size="medium" aria-label="nested table">
                          <TableBody>
                            {event.odds.map((odd, oddIndex) => (
                              <TableRow key={oddIndex}>
                                <TableCell>{odd.label}</TableCell>
                                <TableCell>{event.predictability}</TableCell>
                                <TableCell>{odd.back}</TableCell>
                                <TableCell>{odd.adjustBack}</TableCell>
                                <TableCell>{odd.lay}</TableCell>
                                <TableCell>{odd.adjustLay}</TableCell>
                                <TableCell>{odd.probability}</TableCell>
                                <TableCell>{odd.backValue}</TableCell>
                                <TableCell>{odd.backValue}</TableCell>
                                <TableCell>0.00</TableCell>
                                <TableCell>5.62</TableCell>
                                <TableCell>5.62</TableCell>
                                <TableCell>5.62</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
