/**
 * Valida si el comando del usuario cumple con los criterios del nivel
 * @param {string} input - El comando escrito por el usuario
 * @param {object} level - El objeto del nivel actual con sus reglas de validación
 * @returns {boolean} - True si el comando es válido
 */
export function validateCommand(input, level) {
    if (!input || !input.trim()) return false;

    // Mismo código simple que propuse antes, ahora sí aplicado
    const comandoUsuario = input.toLowerCase().trim();

    // Nivel 2: Opción Múltiple (ls O dir)
    if (level.id === 2) {
        for (let i = 0; i < level.keywords.length; i++) {
            if (comandoUsuario === level.keywords[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    // Nivel General:
    // 1. La PRIMERA palabra clave (ej: "git") debe ser el INICIO del comando
    const comandoPrincipal = level.keywords[0].toLowerCase();
    // startsWith verifica si el string empieza exactamente con eso
    if (!comandoUsuario.startsWith(comandoPrincipal)) {
        return false;
    }

    // 2. El resto de palabras clave deben estar presentes
    for (let i = 1; i < level.keywords.length; i++) {
        const palabra = level.keywords[i].toLowerCase();
        if (!comandoUsuario.includes(palabra)) {
            return false;
        }
    }

    return true;
}
