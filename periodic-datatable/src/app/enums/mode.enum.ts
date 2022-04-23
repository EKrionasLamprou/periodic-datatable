 /**
  * Represents the visual modes of the periodic table in this application.
  */
 export enum Mode {
    /** Each element is represented by the same colour. */
    Element,
    /** Each chemical element block is represented by a different colour. */
    Blocks,
    /** Chemical element groups are represented by vertical stripes */
    Groups,
    /** Chemical element periods are represented by horizontal stripes */
    Periods,
    /** Radioactive chemical elements are highlighted. */
    Radioactive,
    /** Chemical elements' state of matter are represented, depending on the temperature. */
    States,
    /** Classification of the chemicals elements represented by different colours. */
    Classification,
}