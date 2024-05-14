import { Component, OnInit, inject} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioChange, MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';

import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GruposInvestigacionComponent } from '@app/modules/ideas/components/grupos-investigacion/grupos-investigacion.component';
import { RespNewIdeaIdeasInvestigacion, dataIdeaSeleccionada } from '@app/core/services/db_interfaces/Ideas_Investigacion';
import { EditTextRichComponent } from '@app/modules/ideas/components/edit-text-rich/edit-text-rich.component';
import { GeneralProponenteComponent } from '@app/modules/ideas/components/general-proponente/general-proponente.component';
import { TipoProyectoComponent } from '@app/modules/ideas/components/tipo-proyecto/tipo-proyecto.component';
import { DatumValoresDominio } from '@app/core/services/db_interfaces/Valores_Dominio';
import { RevisionesComponent } from '@app/modules/ideas/components/revisiones/revisiones.component';
import { ToastMsgComponent } from '@app/share/components/toast-msg/toast-msg.component';
import { constantesNewIdea, modoVistaFormularioIdeaInvestigacion } from '@app/share/utils/constas';
import { intf_camposFieldEditText } from '@app/share/interface/interfaces';
import { BaseComponent } from '@app/share/components/base/base.component';
import { directus } from '@app/core/services/directus';
import { StoreApp, initDataIdeaSeleccionada } from '@app/core/store/storeApp';

/**
 * Componente que se encarga de renderizar el formulario para crear una idea nueva
 * o ver la información de una idea seleccionada desde la tabla de ideas del componene list-ideas
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-new-idea-page', standalone: true,
  imports: [CommonModule, MatRadioModule, EditTextRichComponent, MatFormFieldModule, // lo emplea mat-error entre otros
    GeneralProponenteComponent,
     MatSelectModule, MatInputModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatCheckboxModule,
    GruposInvestigacionComponent, ToastMsgComponent, AngularEditorModule, MatButtonModule, TipoProyectoComponent, RevisionesComponent
  ],
  templateUrl: './new-idea-page.component.html', styleUrl: './new-idea-page.component.scss',
})
export class NewIdeaPageComponent extends BaseComponent implements OnInit{


  /**
   * Instanciación del store
   * para:
   *  obtener la idea seleccionada
  */
  store = inject(StoreApp)
  Entidades: DatumValoresDominio[] = []; // almacenas las entidades consultadas desde directus

  /**
   * objeto ayuda para renderizar los campos de texto enrriquecido
   */
  camposFieldEditText: intf_camposFieldEditText[] = [
    {
      label: 'Pregunta o problema que origina la ídea',
      SubLabel:'(250 palabras) Identificar de manera sistemática, organizada y objetiva un problema o necesidad y el contexto de su concurrencia con el proposito de responder a una pregunta que aumente el conocimiento y la información sobre algo desconocido, mejorar algun proceso o construir una herramienta tecnológica. Responde a la pregunta ¿Que se quiere saber sobre el problema a analizar? se debe indagar que esta ocurriendo, realizar un diagnostico de lo que esta pasando; en caso de querer comparar, tambien se debe indagar cómo se presenta el problema en varios contextos. Se deben definir si se desea saber las causas del problema, predecir que sucederá en el futuro, o resolverlo.',
      nameField: 'Problema_Idea',
      validacion: false
    },
    {
      label: 'Antecedentes',
      SubLabel:'(500 palabras) Estado de arte de la información, resumen de la revisión del conocimiento existente.',
      nameField: 'Antecedentes',
      validacion: false
    },
    {
      label: 'Justificación',
      SubLabel:`(350 palabras) Exposición de los motivos que merece la investigación, el desarrollo o la innovación,
      los beneficios que brindará y quienes seran los beneficiados. La justificación puede ser de caracter teórico, práctico o metodológico.
       a) justificación práctica: Cuando su desarrollo ayuda a resolver un problema o por lo menos, propone estrategias que de aplicarlas contribuirían a resolverlo. b) justificación teórica:
       Se desarrolla cuando el propósito de estudio es generar reflexión y debate académico sobre el conocimiento existente, confrontar una teoría, contrastar resultados o hacer epistemología
       del conocimiento. c) justificación metodológica: surge cuando la investigación a desarrollar propone un nuevo método o estrategia para generar conocimiento valido y confiable.`,
       nameField: 'Justificacion',
       validacion: false
    },
    {
      label: 'Descripción de la ídea',
      SubLabel:'En este apartado se debe explicar con claridad de que se tratará el proyecto de investigación que se desea hacer. Debe estar redactado en forma clara y coherente para que no haya lugar a dudas',
      nameField: 'Descripcion_Idea',
      validacion: false
    },
    {
      label: 'Bibliografía empleada',
      SubLabel: 'Relacione unicamente la referencia en el texto, ya sea en forma de pie de página o como ítem independiente. Utilice normas APA, referidas a este aspecto.',
      nameField: 'Bibliografia_Empleada',
      validacion: false
    }
  ]

  /**
   * propiedades tipo bandera
   */
  banderaValidacionLineasInvestigacionSeleccionadas:boolean = false;
  banderaValidacionTipoProyectoSeleccionando:boolean = false;
  validacionFecha:boolean = false
  validacionEntidad:boolean = false
  Interna: string = constantesNewIdea.Interna; // constantes
  Externa: string = constantesNewIdea.Externa; // constantes
  modoVistaFormularioIdeaInvestigacion: string = constantesNewIdea.modoVistaFormularioIdeaInvestigacion.modo_nueva_idea; // bandera para saber si estamos en modo ver, nueva o devolución de una nueva idea
  modos_VistaFormulario: modoVistaFormularioIdeaInvestigacion = constantesNewIdea.modoVistaFormularioIdeaInvestigacion; // constantes modo ver, nueva o devolución de una nueva idea
  EntidadInterna: boolean = false; // bandera del check donde el usuario selecciona el tipo de entidad a registrar
  EntidadExterna: boolean = false; // selecciona entidad externa
  Devuelta: string = constantesNewIdea.Estados.Estados.Devuelta;
  Descripcion_Valor_Estado = constantesNewIdea.Estados.campo;
  Id_Idea_Investigacion_Seleccionada: string = '';


  /**
   * Texto mensaje de prueba
   */
  textToastMensaje: string = `Velit culpa pariatur fugiat magna cupidatat id irure in deserunt laborum. Elit enim ipsum
  aute exercitation. Sit et ex aliquip do ex veniam nisi veniam ullamco aliqua. In minim voluptate pariatur elit non
  non consectetur incididunt occaecat voluptate. Non aute nulla cillum est ex ut aliqua occaecat in qui aliquip anim
  minim reprehenderit. Anim adipisicing fugiat nostrud irure labore et reprehenderit ut amet dolore veniam.`;

  /**
   * Objeto para configurar el header de los campos de texto enrriquecido
   */
  config: AngularEditorConfig = {
    editable: true,
    enableToolbar: true,
    spellcheck: true,
    height: '5rem',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'insertImage',
      ]
    ],
    showToolbar: true,
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  /**
   * obj de tipo FormGrup, donde se especifican todos los campos del formulario
   * y su respectiva configuraión de validadciones
   */
  public formulario: FormGroup = this.formBuilder.group({
    Entidad: ['',[Validators.required],[]],
    Fecha_Idea: ['',[Validators.required],[]],
    nombreProponente: ['',[],[]],
    email: ['',[Validators.email],[]],
    cedula: ['',[Validators.minLength(6), Validators.maxLength(14)],[]],
    celular: ['',[],[]],
    Titulo_Idea: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(200)],[]],

    Investigacion_Cientifica: [false,[],[]],
    Desarrollo_Tecnologico: [false,[],[]],
    Innovacion: [false,[],[]],

    URL_Cronograma: ['',[Validators.required, Validators.maxLength(150)],[]],

    tipoProyectoselected: [[],[Validators.required],[]], // solo se utiliza para saber si por lo menos un tipo de pryecto fue seleccionado
    lineas_investigacion: [[],[],[]],
    LineaIvestigacionSelected: [[],[Validators.required],[]],

    Tiempo_Ejecucion_Proyecto: ['',[Validators.required, Validators.maxLength(50)],[]],
    Lugar_Ejecucion: ['',[Validators.required, Validators.maxLength(50)],[]],

    Nuevo_Conocimiento: ['',[Validators.maxLength(200)],[]],
    Tecnologico_Innovacion: ['',[Validators.maxLength(200)],[]],
    Apropiacion_Conocimiento: ['',[Validators.maxLength(200)],[]],
    Formacion_CTEL: ['',[Validators.maxLength(200)],[]],

    Problema_Idea: ['',[Validators.required],[]],
    Antecedentes: ['',[Validators.required],[]],
    Justificacion: ['',[Validators.required],[]],
    Descripcion_Idea: ['',[Validators.required],[]],
    Bibliografia_Empleada: ['',[Validators.required],[]],

    Descripcion_Valor_Estado: ['',[],[]]

  })


  constructor(router: Router, private formBuilder: FormBuilder, _snackBar: MatSnackBar){
    super(router, _snackBar);
  }

  /**
   * En este metodo se valida si existe sesion activa
   * valida si una idea fue seleccionada desde la tabla de ideas
   * si se va a registrar una idea realizar la consulta de Valores_Dominio_dependencia
   */
  ngOnInit(): void {
    const ideaSeleccionanda: dataIdeaSeleccionada = this.store.ideaSeleccionanda()
    this.modoVistaFormularioIdeaInvestigacion = this.store.tipoVistaFormularioIdeaInvestigacion();

    if (ideaSeleccionanda.Codigo_Idea != '') {
      this.Id_Idea_Investigacion_Seleccionada = ideaSeleccionanda.Id_Idea_Investigacion;
      this.verificaSiseDebeAutoCompletarElFormulario(ideaSeleccionanda)
    }
  }

  /**
   * Realiza la consulta de una idea segun el Id_Idea_Investigacion seleccionada
   * trayendo todos los campos para renderizar en el formulario en modo ver
   */
  async verificaSiseDebeAutoCompletarElFormulario(ideaSeleccionanda: dataIdeaSeleccionada){

    const queryParams = {
      filter: {
        Id_Idea_Investigacion: {
          _eq: ideaSeleccionanda.Id_Idea_Investigacion,
        },
      },
      sort: ['Codigo_Idea'],
      fields:['Codigo_Idea', 'Titulo_Idea', 'estados.*', 'estados.Id_Estado.*', 'tipoProyecto', 'Fecha_Creacion', 'Id_Idea_Investigacion','Desarrollo_Tecnologico', 'Tiempo_Ejecucion_Proyecto',
      'Innovacion', 'Investigacion_Cientifica', 'Entidad', 'Fecha_Idea', 'email', 'URL_Cronograma',  'Usuario_Creador.*', 'Id_Convocatoria',
      'Id_Macroproyecto', 'Id_Dependencia_IGAC', 'Id_Ponente', 'Tiempo_Ejecucion', 'Lugar_Ejecucion', 'Nuevo_Conocimiento', 'Tecnologico_Innovacion',
      'Apropiacion_Conocimiento', 'Formacion_CTEL', 'Problema_Idea', 'Antecedentes', 'Justificacion', 'Descripcion_Idea', 'Bibliografia_Empleada', 'Validada',
      'Fecha_Validacion', 'lineas_investigacion.*','lineas_investigacion.Id_Linea_Investigacion.*', 'lineas_investigacion.Id_Linea_Investigacion.Id_Grupo_Investigacion.*'
    ]
    }
    const Idea_Investigacion: RespNewIdeaIdeasInvestigacion = await directus.items(constantesNewIdea.DB.Ideas_Investigacion).readByQuery(queryParams)  as RespNewIdeaIdeasInvestigacion;
    const _ideaSeleccionanda:dataIdeaSeleccionada = {...ideaSeleccionanda, ...Idea_Investigacion.data[0]}

    const camposIdeaSeleccionanda = Object.keys(_ideaSeleccionanda);

    camposIdeaSeleccionanda.forEach(campo => {
      if (this.formulario.controls[campo]) {
        if (campo == "Fecha_Idea") { // para ajustar el formato de la fecha pra que pueda ser leido "yyyy-MM-dd"
          this.formulario.controls[campo].setValue(_ideaSeleccionanda[campo].split('T')[0])
        } else if(campo == "Investigacion_Cientifica" || campo == "Desarrollo_Tecnologico" || campo == "Innovacion"){
          this.formulario.controls[campo].setValue((_ideaSeleccionanda[campo]=='S'||_ideaSeleccionanda[campo]=='1')?true:false)
        } else if(campo == "nombreProponente"){
          this.formulario.controls[campo].setValue(`${_ideaSeleccionanda.Usuario_Creador.first_name} ${_ideaSeleccionanda.Usuario_Creador.last_name}`)
        } else if(campo == "email"){
          this.formulario.controls[campo].setValue(`${_ideaSeleccionanda.Usuario_Creador.email}`)
        } else {
          this.formulario.controls[campo].setValue(_ideaSeleccionanda[campo])
        }
      }
    });

  }

  /**
   * redirecciona a la pagina principal donde esta el banner de convocatorias y la
   * tabla con las lista de ideas
   */
  goDashBoard() { this.router.navigate(['/home/dashboard']); }

  /**
   * Metodo para resetear todos los campos del formulario
   */
  resetFormulario():void{
    this.formulario.reset(
      {
        Entidad:'',
        Fecha_Idea:'',
        nombreProponente:'',
        email:'',
        cedula:'',
        celular:'',
      }
    )
  }


  /**
   * Metodo para renderizar el tipo de entidad que el usuario desea informar
   * @param $event camptura el radioButtom seleccinado
   */
  onCheckboxChangeEntidadInterna($event: MatRadioChange) {

    if ($event.value == constantesNewIdea.Interna) {
      this.EntidadInterna = true
      this.EntidadExterna = false
    } else {
      this.EntidadInterna = false
      this.EntidadExterna = true
      this.formulario.controls["Entidad"].setValue('')
    }
  }

  /**
   * Funcion para validar si los campos incumplen algun requerimiento configirado en el obj formulario
   * @param field nombre del camppo específico
   * @returns true si incumple alguna de las validaciones
   */
  validacionCampo(field: string): boolean | null{
    if(this.validateSesionTime) this.validateSesionTime() // corrige que en momentos validateSesionTime aparece como undefined

    if (this.formulario?.controls) {
      return this.formulario.controls[field].errors && this.formulario.controls[field].touched;
    } else {
      return null
    }
  }

  /**
   * Esta funcion valida si un campo incumple algun requerimiento, si es asi retorna el menaje
   * que se quiere mostrar al usuario
   * @param campo campo al que se quiere validar
   * @returns texto que se quiere renderizar segun requerimiento que incumple
   */
  getErrorCampo(campo: string, formularioPadre?: FormGroup): string {

    let respuesta = "";
    if (this.formulario?.controls) {
      let errores = {}
      if (this.formulario) {
        errores = this.formulario.controls[campo].errors || {}
      } else {
        errores = formularioPadre?.controls[campo].errors || {}
      }
      for (const key of Object.keys(errores)) {
        switch (key) {
          case 'required':
            respuesta = 'Este campo es requerido'
          break;
          case 'minlength':
            respuesta = `A superado el máximo número de caracteres.`
          break;
          case 'maxlength':
            respuesta = `Se ha excedido de la longitud maxima requerida.`
          break;
          case 'email':
            respuesta = `Ingrese un correo electrónico valido.`
          break;
          default:
            break;
        }
      }
    }
    return respuesta
  }

  /**
   * Metodo que agrupa las validaciones de:
   * fecha, lineas de investigacion, tipo proyecto y
   * campos de texto enrriquesido
   * @returns false si no cumple
   */
  validacionesCamposRequeridos(): boolean {
    this.banderaValidacionLineasInvestigacionSeleccionadas = this.formulario?.value.LineaIvestigacionSelected.length < 1;
    this.banderaValidacionTipoProyectoSeleccionando = this.formulario?.value.tipoProyectoselected.length < 1;
    this.validacionFecha = (this.formulario?.controls["Fecha_Idea"].errors)?true:false
    this.validacionEntidad = (this.formulario?.controls["Entidad"].errors)?true:false
    let hasError = false;
    this.camposFieldEditText.forEach((e: { nameField: string | number; validacion: boolean; }) => {
      if (this.formulario?.controls[e.nameField].errors) {
        hasError = e.validacion = true
      } else{
        hasError = e.validacion = false
      }
    })
    return !(this.banderaValidacionLineasInvestigacionSeleccionadas || this.banderaValidacionTipoProyectoSeleccionando || this.validacionFecha || this.validacionEntidad || hasError)
  }

  /**
   * Metodo final que valida campos requerido y forma json final a persistir desde directus
   * si existen campos pendientes, renderiza un mensaje informativo
   * @param accion string
   */
  async onSave(accion:string):Promise<void>{
    if (accion  == "regresar") {
      this.router.navigate([`/home/dashboard`]);
    } else if (accion != "submit") {
      if (this.validacionesCamposRequeridos() && this.formulario.status == "VALID"
      /* && !this.fnValidacionFecha() && !this.validacionCampoFieldEditText() */){
        const { Antecedentes, Apropiacion_Conocimiento, Bibliografia_Empleada, Tecnologico_Innovacion, Descripcion_Idea,
          Entidad, Fecha_Idea, Formacion_CTEL, Justificacion, LineaIvestigacionSelected, Lugar_Ejecucion, Nuevo_Conocimiento,
          Problema_Idea, Tiempo_Ejecucion_Proyecto, Titulo_Idea, Investigacion_Cientifica, Desarrollo_Tecnologico,
          Innovacion, URL_Cronograma, cedula, celular, email, nombreProponente
        } = this.formulario.value;

        // json para enviar
        let objToSend = {};
        if (accion == "registrar") {
          objToSend = {
            Antecedentes,
            Apropiacion_Conocimiento,
            Bibliografia_Empleada,
            cedula,
            celular,
            Codigo_Idea: Number(new Date()),
            Desarrollo_Tecnologico:Desarrollo_Tecnologico?'S':'N',
            Descripcion_Idea,
            email,
            Entidad,
            // Fecha_Creacion: new Date(),
            Fecha_Idea,
            // Fecha_Validacion: new Date(),
            Formacion_CTEL,
            Id_Convocatoria:this.store.convocatoriaSelected().Id_Convocatoria,
            Id_Ponente: this.store.usuario().id,
            Innovacion:Innovacion?'S':'N',
            Investigacion_Cientifica:Investigacion_Cientifica?'S':'N',
            lineas_investigacion: {
                "create": LineaIvestigacionSelected,
                "update": [],
                "delete": [
                  // array de los id que se quite
                ]
            },
            Justificacion,
            Lugar_Ejecucion,
            nombreProponente,
            Nuevo_Conocimiento,
            Problema_Idea,
            Tecnologico_Innovacion,
            Tiempo_Ejecucion_Proyecto,
            Titulo_Idea,
            URL_Cronograma,
            // Usuario_Creador: this.store.usuario().id,
            Validada:'false',
          }
        } else { // logica editar
          const Codigo_Idea = "";
          objToSend = {
            Antecedentes,
            Apropiacion_Conocimiento,
            Bibliografia_Empleada,
            cedula,
            celular,
            Codigo_Idea,
            Desarrollo_Tecnologico,
            Descripcion_Idea,
            email,
            Entidad,
            Fecha_Idea,
            Formacion_CTEL,
            Innovacion,
            Investigacion_Cientifica,
            lineas_investigacion: {
                "create": LineaIvestigacionSelected,
                "update": [],
                "delete": LineaIvestigacionSelected//deseleccionar
            },
            Justificacion,
            Lugar_Ejecucion,
            nombreProponente,
            Nuevo_Conocimiento,
            Problema_Idea,
            Tecnologico_Innovacion,
            Tiempo_Ejecucion_Proyecto,
            Titulo_Idea,
            URL_Cronograma,
          }
        }
        let result: dataIdeaSeleccionada = initDataIdeaSeleccionada;
        const Ideas_Investigacion = directus.items('Ideas_Investigacion'); // instancia la coleccion
        if (accion == "registrar") {
          result = await Ideas_Investigacion.createOne(objToSend) as dataIdeaSeleccionada;// crean un item
        }else{ // actualiza un item
          result = await Ideas_Investigacion.updateOne(this.Id_Idea_Investigacion_Seleccionada, objToSend) as dataIdeaSeleccionada
        }
          let mensaje = ``;
          if (result) {
            mensaje = `Idea creada de forma satisfactoria`;
            this.router.navigate([`/home/dashboard`]);
          }else{
            mensaje = `Se presentaron inconvenientes en la comunicación, intentado mas tarde`;
          }
          this.rederMensajeToast(mensaje);
          this.store.changeSpinner(false)
      }else{
        this.rederMensajeToast(`Existen campos que no cumplen las validaciones`);
      }
    }
  }
}
