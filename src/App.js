import React, { useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Stack from '@mui/material/Stack';






import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    button: {
      
      margin: theme.spacing(1),
    }
  }


}))





function App() {
  const classes = useStyles();

  const [inputEntrada, setInputEntrada] = useState([

    { criterioEvaluar: '', puntuacionCriterio: '' },
  ]);

  const [inputUrl, setInputUrl] = useState([

    { urlPruebas: '' },
  ]);

  const [evaluadorTecnico, setEvaluadorTecnico] = useState([

    { nombreEvaluador: '', correoEvaluador: '', }
  ]);

  const [fechaPruebaTec, setFechaPruebaTec] = useState([

    { fechaTecnica: '', }
  ]);

  const [comentarioTecnica, setComentarioTecnica] = useState([
    { comentarioTec: '' }
  ]);

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("inputEntrada", inputEntrada, fechaPruebaTec, comentarioTecnica, inputUrl, evaluadorTecnico );

  };

  const handleChangeInput = (index, event) => {
    const values = [...inputEntrada];
    values[index][event.target.name] = event.target.value;
    setInputEntrada(values);

  }
  const handleChangeInputUrl = (index, event) => {
    const values = [...inputUrl];
    values[index][event.target.name] = event.target.value;
    setInputUrl(values);

  }

  const handleChangeTecnico = (event) => {
    setEvaluadorTecnico({
      ...evaluadorTecnico,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeFecha = (event) => {
    setFechaPruebaTec({
      ...fechaPruebaTec,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeComentario = (event) => {
    setComentarioTecnica({
      ...comentarioTecnica,
      [event.target.name]: event.target.value
    })
  }

  const handleAddUrl = () => {
    setInputUrl([...inputUrl, { urlPruebas: '' }]);
  }
  const handleAddCriterioEvaluar = () => {
    setInputEntrada([...inputEntrada, { criterioEvaluar: '', puntuacionCriterio: '' }]);
  }

  const handleRemoveUrl = (index) => {
    const values = [...inputUrl];
    values.splice(index, 1);
    setInputUrl(values);
  }
  const handleRemoveCriterios = (index) => {
    const values = [...inputEntrada];
    values.splice(index, 1);
    setInputEntrada(values);
  }


  return (

  <section className="etapas">
      <div className="contenedor-etapas">
        <h1 className="titulo-etapa">ETAPA 1 - Prueba técnica</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          <div className="">
            <div>
              {inputUrl.map((inputUrl, index) => (
                <div  key={index}>
                  <TextField
                    name="urlPruebas"
                    label="url repositorio de prueba técnica"
                    value={inputUrl.urlPruebas}
                    variant="outlined"
                    onChange={event => handleChangeInputUrl(index, event)}
                  ></TextField>
                  <IconButton onClick={() => handleRemoveUrl(index)}>
                    <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                  </IconButton>
                  <IconButton onClick={() => handleAddUrl()}>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button className="btn-agregar"><FontAwesomeIcon icon={faCloudUploadAlt} />Subir prueba</button>
          </div>
        <div className="contenedor-evaluador separador10">
          <h2 className="titulo-evaluador">Evaluador prueba técnica</h2>
            <div className="contenedor-datos-evaluador">
              <div className="datos-evaluador">
                <TextField
                  name="nombreEvaluador"
                  label="Nombre del evaluador"
                  value={evaluadorTecnico.nombreEvaluador}
                  onChange={handleChangeTecnico}
                  variant="outlined"

                ></TextField>
                <TextField
                  name="correoEvaluador"
                  label="Correo del evaluador "
                  value={evaluadorTecnico.correoEvaluador}
                  onChange={handleChangeTecnico}
                  variant="outlined"

                ></TextField>
              </div>
              <div className="contenedor-fecha-entrevista">
                <p className="">Fecha y hora entrevista<span className="asterisco">*</span></p>
                <div><Stack component="div" noValidate spacing={1}>

                  <TextField
                    id="datetime-local"
                    label="Ingrese la fecha"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    name="fechaTecnica"
                    variant="outlined"
                    onChange={handleChangeFecha}
                    sx={{ width: 100 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack></div>
              </div>
              <div className="contenedor-items-notas separador10">
                <div className="encabezado-notas">
                  <p>Criterios a evaluar</p>
                  <p>Calificación (1.0 a 5.0)</p>
                </div>
              </div>
                
                  {inputEntrada.map((inputEntrada, index) => (
                    <div className="contenedor-items">
                      <div className="contenedor-criterio"  key={index}>
                        <IconButton onClick={() => handleRemoveCriterios(index)}>
                          <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                        </IconButton>
                        <TextField
                          name="criterioEvaluar"
                          label="Criterio a evaluar"
                          value={inputEntrada.criterioEvaluar}
                          onChange={event => handleChangeInput(index, event)}
                          variant="outlined"
                        ></TextField>
                        <TextField
                          name="puntuacionCriterio"
                          label="0.0"
                          value={inputEntrada.puntuacionCriterio}
                          onChange={event => handleChangeInput(index, event)}
                          variant="outlined"
                        ></TextField>
                        
                        <IconButton onClick={() => handleAddCriterioEvaluar()}>
                          <AddIcon></AddIcon>
                        </IconButton>
                      </div>
                    </div>
                    
                  ))}
                
              <div className="contenedor-calificacion">
                <div className="calificacion">
                  <p>TOTAL</p>
                  <p>|</p>
                  <p>0.0</p>
                </div>
              </div>
            </div>
            <div className="contenedor-comentarios-evaluador separador5">
              <label for="">Cometarios:</label>
              <textarea
                  name="comentarioTec"
                  value={comentarioTecnica.comentarioTec}
                  onChange={handleChangeComentario} rows="4"> 
              </textarea>
            </div>
          </div>


        </form>
        <button className="btn-guardar" type="submit"
          onClick={handleSubmit}>Guardar</button>
      </div>
   </section>
  );
}

export default App;
