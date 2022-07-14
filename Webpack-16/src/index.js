import {addContent} from "./content/content"
import "./main/main"
import "./main/main.css"
import {pairStudents } from "./massiv/massiv"
import {infoProgram} from "./function-programm/program"
import {infoMethod} from "./method-massiv/method"
import {infoPrototype} from "./prototype/prototype"
import {elem} from "./symbolGenerator/symbolGenerator"
import  {generateBlocks,generateBlocksInterval} from "./DOM/dom"

addContent(pairStudents)
addContent(infoProgram)
addContent(infoMethod)
addContent(infoPrototype)
addContent(elem)
generateBlocks()
generateBlocksInterval()

