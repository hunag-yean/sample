"use strict";
/*
 * SonarQube JavaScript Plugin
 * Copyright (C) 2011-2021 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
// https://jira.sonarsource.com/browse/RSPEC-1821
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const message = 'Refactor the code to eliminate this nested "switch".';
exports.rule = {
    create(context) {
        return {
            'SwitchStatement SwitchStatement': function (node) {
                const switchToken = context
                    .getSourceCode()
                    .getFirstToken(node, token => token.value === 'switch');
                context.report({
                    message,
                    loc: switchToken.loc,
                });
            },
        };
    },
};
//# sourceMappingURL=no-nested-switch.js.map