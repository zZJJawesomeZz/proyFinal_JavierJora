export const levels = [
    {
        id: 1,
        category: "git",
        title: "Iniciando el Viaje",
        lesson: "¡Bienvenido recluta! Para empezar a rastrear cambios en tu código, necesitas inicializar un repositorio.\nEl comando mágico es: git init",
        challenge: "Estás en la carpeta raíz de tu nuevo proyecto. Inicializa el repositorio Git.",
        expected: "git init",
        keywords: ["git", "init"]
    },
    {
        id: 2,
        category: "powershell",
        title: "Explorando el Terreno",
        lesson: "En Windows (PowerShell), necesitamos saber qué archivos tenemos alrededor.\nUsa el comando: ls (o dir) para listar el contenido.",
        challenge: "Muestra la lista de archivos del directorio actual.",
        expected: "ls",
        keywords: ["ls", "dir", "Get-ChildItem"]
    },
    {
        id: 3,
        category: "git",
        title: "Preparando el Escenario",
        lesson: "Git tiene un área de preparación (staging) donde eliges qué cambios guardar.\nPara agregar un archivo específico usa: git add <nombre_archivo>",
        challenge: "Acabas de crear 'index.html'. Agrégalo al área de staging.",
        expected: "git add index.html",
        keywords: ["git", "add", "index.html"]
    },
    {
        id: 4,
        category: "git",
        title: "Verificación de Estado",
        lesson: "¿No estás seguro de qué archivos están en staging? ¡Pregúntale a Git!\nUsa: git status",
        challenge: "Revisa el estado actual de tu repositorio.",
        expected: "git status",
        keywords: ["git", "status"]
    },
    {
        id: 5,
        category: "git",
        title: "Confirmando Cambios",
        lesson: "Es hora de guardar tu trabajo en el historial. Necesitas un mensaje descriptivo.\nUsa: git commit -m \"tu mensaje\"",
        challenge: "Haz un commit con el mensaje \"primer commit\".",
        expected: "git commit -m \"primer commit\"",
        keywords: ["git", "commit", "-m"]
    },
    {
        id: 6,
        category: "powershell",
        title: "Arquítecto de Carpetas",
        lesson: "Un proyecto organizado necesita carpetas. En PowerShell usamos 'mkdir' (Make Directory).\nComando: mkdir <nombre_carpeta>",
        challenge: "Crea una nueva carpeta llamada 'assets'.",
        expected: "mkdir assets",
        keywords: ["mkdir", "assets"]
    },
    {
        id: 7,
        category: "git",
        title: "Multiverso (Ramas)",
        lesson: "Nunca trabajes directo en main. Crea una rama para tus experimentos.\nUsa: git checkout -b <nombre_rama>",
        challenge: "Crea y cámbiate a una nueva rama llamada 'feature-login'.",
        expected: "git checkout -b feature-login",
        keywords: ["git", "checkout", "feature-login"]
    },
    {
        id: 8,
        category: "git",
        title: "BOSS FIGHT: Despliegue",
        lesson: "Tu código está listo. Es hora de subirlo a GitHub.\nComando: git push origin <rama>",
        challenge: "Sube tus cambios a la rama 'main' del remoto 'origin'.",
        expected: "git push origin main",
        keywords: ["git", "push", "origin", "main"]
    }
];
