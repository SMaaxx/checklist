import React, {useState} from 'react';
import styles from './App.module.scss';
import ProgressBar from "./ProgressBar/ProgressBar";

interface ProgressParamsInterface {
  done: number,
  tasks: string[]
}

const App: React.FC = () => {
  const [isScssProgressMode, setIsScssProgressMode] = useState<boolean>(false)
  const [progressParams, setProgressParams] = useState<ProgressParamsInterface>(
    {
      done: 0,
      tasks: [
        'Созвониться с клиентом до 23.05.24 12:00',
        'Созвониться с клиентом до 24.05.24 12:00',
        'Созвониться с клиентом до 25.05.24 12:00',
        'Созвониться с клиентом до 26.05.24 12:00',
        'Созвониться с клиентом до 27.05.24 12:00',
        'Созвониться с клиентом до 28.05.24 12:00',
        'Созвониться с клиентом до 29.05.24 12:00',
      ]
    }
  )

  const changeButtonClickHandler = (): void => {
    setIsScssProgressMode(!isScssProgressMode);
    if(!isScssProgressMode && progressParams.done !== 0) {
      setProgressParams({...progressParams, done: 0})
    }
  }
  const plusTaskClickHandler = () => {
    if (progressParams.done !== progressParams.tasks.length) {
      setProgressParams({...progressParams, done: progressParams.done + 1})
    }
  }

  const minusTaskClickHandler = () => {
    if (progressParams.done !== 0) {
      setProgressParams({...progressParams, done: progressParams.done - 1})
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.buttonBar}>
          <div className={styles.progressButtons}>
            <div className={styles.button} onClick={plusTaskClickHandler}>+</div>
            <div className={styles.button} onClick={minusTaskClickHandler}>-</div>
          </div>
          <div
            className={styles.button}
            onClick={changeButtonClickHandler}
          >
            {`Сменить на ${isScssProgressMode ? 'useState' : 'SCSS' }`}
          </div>
        </div>
        <div className={styles.content}>
          <ProgressBar
            goal={progressParams.tasks.length}
            done={progressParams.done}
            isScssProgressMode={isScssProgressMode}/>
          <div className={styles.main}>
            <div className={styles.title}>Чеклист</div>
            <div className={styles.progress}>{`Выполнено: ${progressParams.done} из ${progressParams.tasks.length}`}</div>
            <div className={styles.next}>
              {progressParams.done === progressParams.tasks.length ?
                'Все задания выполнены' : `Следующее действие: ${progressParams.tasks[progressParams.done]}`
              }
            </div>
          </div>
        </div>
        <div className={styles.button}>
          Открыть чеклист
        </div>
      </div>
    </div>
  );
}

export default App;
