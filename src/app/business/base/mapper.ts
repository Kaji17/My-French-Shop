export interface Mapper<I, O> {
  mapFrom(parametre: I): O;

  mapTo(parametre: O): I
}
