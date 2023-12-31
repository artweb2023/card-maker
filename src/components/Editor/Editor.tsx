import { selectEditor } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useAppActions } from "../../redux/hooks";
import { Header } from "../Header/Header";
import { SideBar } from "../Sidebar/SideBar";
import { Main } from "../Main/Main";
import { saveModelToLocal, loadModelFromLocal } from "../../utils/fileUtils";
import { getEditorModel } from "../../utils/utils";
import styles from "./Editor.module.css";

function EditorView() {
  const editorModel = useSelector(selectEditor);
  const {
    createSaveCanvasAction,
    createLoadCanvas,
    createEmptyModel,
    createChangeActiveCanvasAction,
  } = useAppActions();

  const saveToFile = () => {
    saveModelToLocal(editorModel);
  };

  const loadFromFile = () => {
    loadModelFromLocal((model) => {
      createLoadCanvas(model);
    });
  };

  const resetModelHandler = () => {
    const emptyModel = getEditorModel();
    createSaveCanvasAction(emptyModel);
    createLoadCanvas(emptyModel);
    createEmptyModel(emptyModel);
  };

  const handleSelectCanvas = (canvasId: string) => {
    createChangeActiveCanvasAction(canvasId);
  };
  return (
    <div className={styles.editor_wrapper}>
      <Header
        saveToFile={saveToFile}
        loadFromFile={loadFromFile}
        resetModelHandler={resetModelHandler}
      />
      <div className={styles.main}>
        <SideBar upload={editorModel.upload} />
        <Main
          onSelectCanvas={handleSelectCanvas}
          selectedCanvasId={editorModel.active}
        />
      </div>
    </div>
  );
}

export { EditorView };
