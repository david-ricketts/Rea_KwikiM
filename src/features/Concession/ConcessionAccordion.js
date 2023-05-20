import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import ConcessionsList from './ConcessionsList';
import { selectAllConcessions } from './concessionsSlice';

const ConcessionsAccordion = () => {

    const sections = selectAllConcessions();
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

    return (
        <div>
        <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId="1">Meals</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <ConcessionsList sections={sections.entres}/>
                    </AccordionBody>
                </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">Snacks</AccordionHeader>
                <AccordionBody accordionId="2">
                    <ConcessionsList sections={sections.snacks}/>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="3">Drinks</AccordionHeader>
                <AccordionBody accordionId="3">
                    <ConcessionsList sections={sections.drinks} />
                </AccordionBody>
            </AccordionItem>
        </Accordion>
        </div>
    );
}

export default ConcessionsAccordion;
