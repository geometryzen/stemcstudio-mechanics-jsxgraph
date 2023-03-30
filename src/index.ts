export { Bar } from './Bar';
export { Beam } from './Beam';
export { DistributedLoad } from './DistributedLoad';
export { Fixture } from './Fixture';
export { Rope } from './Rope';
export { Wheel } from './Wheel';
import { Options } from 'jsxgraph';

const defaultMecLayer = 6
// infobox settings, further settings after board initiation
Options.infobox.layer = defaultMecLayer + 5
Options.infobox.strokeColor = 'black'
Options.infobox.cssStyle = 'background-color: #ffffffdd;'
// snap settings. Interactive objects are handled explicity
Options.point.snapToGrid = false // grid snap spoils rotated static objects
Options.point.snapSizeX = 0.1
Options.point.snapSizeY = 0.1
// interactive objects are released explicitly
Options.point.fixed = true
Options.line.fixed = true
Options.circle.fixed = true
// label settings
Options.text.useMathJax = true
Options.label.useMathJax = true
Options.label.offset = [0, 0]
Options.label.anchorY = 'middle'
// highlighting is activated explicitly for interactive objects
Options.curve.highlight = false
Options.label.highlight = false
Options.text.highlight = false
Options.circle.highlight = false
Options.line.highlight = false
Options.polygon.highlight = false
Options.polygon.borders.highlight = false
Options.point.highlight = false
