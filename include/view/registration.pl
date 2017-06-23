<form ng-submit="submit()">
	<table>
		<tr>
			<th colspan="2">REGISTRATION FORM</th>
		</tr>
		<tr>
			<th colspan="2"><label style="color:red;">{{errMsg}}</label></th>
		</tr>
		<tr>
			<td>FIRST NAME</td>
			<td><input type="text"/></td>
		</tr>
		<tr>
			<td>LAST NAME</td>
			<td><input type="text"/></td>
		</tr>
		<tr>
			<td>EMAIL ID</td>
			<td><input type="text"/></td>
		</tr>
		<tr>
			<td>MOBILE NO</td>
			<td><input type="text"/></td>
		</tr>
		<tr>
			<td>USER ID</td>
			<td><input type="text" ng-model='reg.uid'/></td>
		</tr>
		<tr>
			<td>PASSWORD</td></td>
			<td><input type="password" ng-model='reg.pwd'/></td>
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