/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from "vscode";

export function getSingleRootWorkspace(): vscode.WorkspaceFolder | undefined {
	// if this is a multi-root workspace, return undefined
	return vscode.workspace.workspaceFolders &&
		vscode.workspace.workspaceFolders.length === 1
		? vscode.workspace.workspaceFolders[0]
		: undefined;
}
