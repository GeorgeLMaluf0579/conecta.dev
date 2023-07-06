import { useState, useEffect }  from "react";
import KindDataService from "../../services/KindDataService";
import { IKind } from "../../types/Kind.type";

export const useKindsList = () => {
  const [kindsList, setKindsList] = useState<any>([])

  async function fetchKindsList() {
    KindDataService.getAll()
      .then((response: {data: IKind[]}) => {
        setKindsList(response.data)
      })
  }

  useEffect (() => {
    fetchKindsList()
  },[])

  return { kindsList }
}