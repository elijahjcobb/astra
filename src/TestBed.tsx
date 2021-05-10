/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {ReactElement} from "react";
import "./TestBed.css";
import {PUICard} from "./components/PUICard/PUICard";
import {PUIImmutableNumericStatus} from "./components/PUIImmutableNumericStatus/PUIImmutableNumericStatus";
import {PUIApp} from "./components/PUIApp/PUIApp";


const TEST_ITEM: ReactElement = <PUIImmutableNumericStatus label={"Current 1"} range={[1, 5]} value={1.833398329832983}/>


export function TestBed(): ReactElement {

	return <PUIApp>{TEST_ITEM}</PUIApp>

}
