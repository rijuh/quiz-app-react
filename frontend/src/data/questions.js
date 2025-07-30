import { ComputerFundamentals } from "./ComputerFundamental";

import { VariableQus } from './Basics/VariableQus'
import { TypeConvertion } from "./Basics/TypeConvertion";
import { Datatypes } from "./Basics/DataTypes";
import { Operators } from "./Basics/Operators";

import { IfElse } from "./Control Structure/IfElse";
import { SwitchCase } from "./Control Structure/SwitchCase";
import { TernaryOperator } from "./Control Structure/TernaryOperator";

import { ForLoop } from "./Loops/ForLoop";
import { WhileLoop } from "./Loops/WhileLoop";
import { DoWhileLoop } from "./Loops/DoWhileLoop";
import { BreakContinue } from "./Loops/BreakContinue";

import { FunctionDeclaration } from "./Function/FunctionDeclaration";
import { FunctionExpression } from "./Function/FunctionExpression";
import { ArrowFunction } from "./Function/ArrowFunction";
import { ParameterArguments } from "./Function/ParameterArguments";
import { ReturnValue } from "./Function/ReturnValue";

import { Arrays } from "./Arrays/Arrays";
import { ArrayMethods } from "./Arrays/ArrayMethods";
import { LoopingThroughArray } from "./Arrays/LoopingThroughArray"

export const questions = {
    Variable: VariableQus,
    Datatype: Datatypes,
    Typeconvertion: TypeConvertion,
    Operator: Operators,

    Ifelse: IfElse,
    Switchcase: SwitchCase,
    Ternaryoperator: TernaryOperator,

    ForLoop: ForLoop,
    WhileLoop: WhileLoop,
    DoWhileLoop: DoWhileLoop,
    BreakContinue: BreakContinue,

    FunctionDeclaration: FunctionDeclaration,
    FunctionExpression: FunctionExpression,
    ArrowFunction: ArrowFunction,
    ParameterArguments: ParameterArguments,
    ReturnValue: ReturnValue,

    Arrays: Arrays,
    ArrayMethods: ArrayMethods,
    LoopingThroughArray: LoopingThroughArray
};