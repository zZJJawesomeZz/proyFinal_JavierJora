import { describe, it, expect } from 'vitest';
import { validateCommand } from '../src/validator.js';
import { levels } from '../src/levels.js';

describe('Motor de Validación del Juego', () => {

    it('Debe validar correctamente "git init" para el nivel 1', () => {
        const nivel = levels[0];
        const inputUsuario = 'git init';
        expect(validateCommand(inputUsuario, nivel)).toBeTruthy();
    });

    it('Debe fallar si el comando tiene errores tipográficos', () => {
        const nivel = levels[0];
        const inputUsuario = 'gut init';
        expect(validateCommand(inputUsuario, nivel)).toBeFalsy();
    });

    it('Debe ser flexible con los espacios y mayúsculas', () => {
        const nivel = levels[1];
        expect(validateCommand('LS', nivel)).toBe(true);
        expect(validateCommand('dir', nivel)).toBe(true);
    });

    it('Debe validar comando con argumentos (git add)', () => {
        const nivel = levels.find(l => l.id === 3);
        expect(nivel).toBeDefined();

        expect(validateCommand('git add index.html', nivel)).toEqual(true);
    });

    it('Debe validar commit aceptando cualquier mensaje', () => {
        const nivel = levels.find(l => l.id === 5);
        expect(validateCommand('git commit -m "primer commit"', nivel)).toBeTruthy();
    });

    it('Debe validar creación de ramas', () => {
        const nivel = levels.find(l => l.id === 7);
        expect(validateCommand('git checkout -b feature-login', nivel)).toBeTruthy();
    });

    it('Debe validar el push final (Boss Fight)', () => {
        const nivel = levels.find(l => l.id === 8);
        expect(validateCommand('git push origin main', nivel)).toBe(true);
        expect(validateCommand('git push origin develop', nivel)).toBe(false);
    });
});
