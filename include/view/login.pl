<form ng-submit="submit()">
	<table>
		<tr>
			<th colspan="2">LOGIN FORM</th>
		</tr>
		<tr>
			<th colspan="2"><label style="color:red;">{{errMsg}}</label></th>
		</tr>
		<tr>
			<td>USER ID</td>
			<td><input type="text" ng-model='user.uid'/></td>
		</tr>
		<tr>
			<td>PASSWORD</td></td>
			<td><input type="text" ng-model='user.pwd'/></td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<button>
					SUBMIT
				</button>
			</td>
		</tr>
	</table>
</form>
