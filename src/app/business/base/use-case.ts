/**
 * Cette interface définit la signature des UsesCases de l'application. Elle possède deux paramètre générique:
 * @C indique la commande du cas d'utilisation
 * @T indique le type de retour du cas d'utilisation
 */
export interface UseCase<C, T> {

  /**
   * Cette méthode décrit le fonctionnement du cas d'utilisation.
   * @param commande
   * @returns T
   */
  excute(commande?: C): T;
}
